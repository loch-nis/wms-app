import { Routes } from '@angular/router';
import { authGuard } from './features/auth/guards/auth.guard';
import { HomeComponent } from './features/home';
import { AboutComponent } from './features/about';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'hike-planner',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./features/hike-planner/hike-planner.routes').then(
        (module) => module.hikePlannerRoutes,
      ),
  },
  {
    path: 'ware-management',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/ware-management').then(
        (module) => module.WareManagementContainerComponent,
      ),
  },
  {
    path: 'stats',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/stats').then(
        (module) => module.StatsContainerComponent,
      ),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.routes').then((module) => module.authRoutes),
  },

  { path: '**', redirectTo: 'home' },
];
