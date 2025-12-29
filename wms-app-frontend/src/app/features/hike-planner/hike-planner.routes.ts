import { Routes } from '@angular/router';
import { authGuard } from '../auth/guards/auth.guard';

export const hikePlannerRoutes: Routes = [
  {
    path: ':id',
    // should do Hike Access Guard / authorization
    loadComponent: () =>
      import('./components/hike-details-presenter/hike-details-presenter.component').then(
        (module) => module.HikeDetailsPresenterComponent,
      ),
  },
  {
    path: '',
    loadComponent: () =>
      import('./containers/hike-planner-container/hike-planner-container.component').then(
        (module) => module.HikePlannerContainerComponent,
      ),
  },
];
