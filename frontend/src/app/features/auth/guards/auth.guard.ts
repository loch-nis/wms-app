import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../auth.service";
import { inject } from "@angular/core";




export const authGuard = (route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot) => {
    const authService = inject(AuthService); 
    const router = inject(Router);

    if(authService.isLoggedIn())
    {
        return true;
    }
    router.navigateByUrl('auth/login');
    return false;
};