import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '../auth.service';
import { inject } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { filter, firstValueFrom } from 'rxjs';

export const noAuthGuard = async (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const user$ = toObservable(authService.authUser);

  await firstValueFrom(user$.pipe(filter((user) => user !== undefined)));

  if (authService.isLoggedIn()) {
    return router.createUrlTree(['/home']);
  }
  return true;
};
