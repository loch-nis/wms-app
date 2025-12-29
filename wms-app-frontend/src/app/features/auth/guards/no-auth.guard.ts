import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '../auth.service';
import { inject } from '@angular/core';

export const noAuthGuard = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLoggedIn()) {
    router.navigateByUrl('home');
    return false;
  }
  return true;
};

// todo "Do not return false if you need to redirect a user
// • Use the UrlTree or RedirectCommand"
// todo is this still correct? if so, fix!

// todo same in auth.guard.ts
