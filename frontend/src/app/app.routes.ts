import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    
    {
        path: 'home',
        loadComponent: () => 
            import('./features/home').then(c => c.HomeComponent),
    },
    {
        path: 'about',
        loadComponent: () => 
            import('./features/about').then(c => c.AboutComponent),
    }, 
    {
        path: 'ware-management',
        // todo: canActivate: [authGuard],
        loadComponent: () => 
            import('./features/ware-management')
            .then(c => c.WareManagementContainerComponent),
    },
    { 
    path: 'auth',
    loadChildren: () => 
        import('./features/auth/auth.routes').then(c => c.authRoutes),
    }, 

    { path: '**', redirectTo: 'home' },
];
