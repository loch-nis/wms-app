import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { NotificationService } from '../services/notification.service';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';

export const networkErrorInterceptor: HttpInterceptorFn = (request, next) => {
  const notificationService = inject(NotificationService);
  return next(request).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 0) {
        notificationService.showError(
          'Unable to connect to the server. Is the backend running?'
        );
      }
      return throwError(() => error);
    })
  );
};
