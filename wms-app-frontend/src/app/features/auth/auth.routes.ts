import { Routes } from '@angular/router';
import { noAuthGuard } from './guards/no-auth.guard';
import { authGuard } from './guards/auth.guard';

export const authRoutes: Routes = [
  {
    path: 'login',
    canActivate: [noAuthGuard],
    loadComponent: () =>
      import('./containers/auth-container/auth-container.component').then(
        (module) => module.AuthContainerComponent,
      ),
  },
  {
    path: 'register',
    canActivate: [noAuthGuard],
    loadComponent: () =>
      import('./containers/auth-container/auth-container.component').then(
        (module) => module.AuthContainerComponent,
      ),
  },
  {
    path: 'logout',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./containers/auth-container/auth-container.component').then(
        (module) => module.AuthContainerComponent,
      ),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
];
