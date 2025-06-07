import { HttpInterceptorFn } from "@angular/common/http";
import { AuthService } from "../auth.service";
import { throwError, catchError } from "rxjs";
import { inject } from "@angular/core";


export const authInterceptor: HttpInterceptorFn = (request, next) => {

    const authService = inject(AuthService);

    const token = localStorage.getItem('token');

    if (token) 
    {
        request = request.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`
            }
        });
    }
    return next(request).pipe(
        catchError((error) => {

            // todo check what that ignoreAPI stuff is about?

            switch (error.status)
            {
                case 401:
                    authService.logout();
                    break;
                    // could add more error handling here, such as for 403
                }
            return throwError(() => error);
        })
    );
}