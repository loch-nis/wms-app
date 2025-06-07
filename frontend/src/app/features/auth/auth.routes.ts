import { Routes } from "@angular/router";



export const authRoutes: Routes = [
    {
        path: 'login',
        // todo add no-auth guard here
        loadComponent: () =>
            import('./containers/auth-container/auth-container.component')
            .then(c => c.AuthContainerComponent),
    },
    {
        path: 'register',
        // todo add no-auth guard here - or?
        loadComponent: () =>
            import('./containers/auth-container/auth-container.component')
            .then(c => c.AuthContainerComponent),
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login',
    },
]
