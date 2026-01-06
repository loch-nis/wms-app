import { HttpInterceptorFn } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { throwError, catchError } from 'rxjs';
import { inject } from '@angular/core';
import { TokenService } from '../../../core/services/token.service';

export const authInterceptor: HttpInterceptorFn = (request, next) => {
  const authService = inject(AuthService);
  const tokenService = inject(TokenService);

  const token = tokenService.getToken();

  if (token) {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  return next(request).pipe(
    catchError((error) => {
      const ignoreAPIs = ['/auth/'];
      if (ignoreAPIs.some((api) => request.url.includes(api))) {
        return throwError(() => error);
      }

      switch (error.status) {
        case 401:
          authService.logout();
          return throwError(() => error);
        // could add more error handling here, such as for 403
      }
      return throwError(() => error);
    }),
  );
};
