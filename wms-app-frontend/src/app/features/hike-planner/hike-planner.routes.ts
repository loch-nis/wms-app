import { Routes } from "@angular/router";
import { authGuard } from "../auth/guards/auth.guard";



export const hikePlannerRoutes: Routes = [
    {
        path: ':id',
        // todo Hike Access Guard ?!
        loadComponent: () =>
            import('./components/hike-details-presenter/hike-details-presenter.component')
            .then(c => c.HikeDetailsPresenterComponent),
    },
    {
        path: '',
        loadComponent: () =>
            import('./containers/hike-planner-container/hike-planner-container.component')
            .then(c => c.HikePlannerContainerComponent),
    },
]