import { Component, inject, computed } from '@angular/core';
import { AuthService } from '../../auth.service';
import { LoginPresenterComponent } from '../../components/login-presenter/login-presenter.component';
import { RegisterPresenterComponent } from '../../components/register-presenter/register-presenter.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-container',
  imports: [LoginPresenterComponent, RegisterPresenterComponent],
  templateUrl: './auth-container.component.html',
})
export class AuthContainerComponent {
  private authService = inject(AuthService);
  private router = inject(Router);
  
  readonly mode = computed(() => {
    return this.router.url.includes('register') ? 'register' : 'login';
  });



  readonly handleLogin = (email: string, password: string) => {
    this.authService.login(email, password);
  }

  readonly handleRegister = (
    email: string, 
    password: string,
    firstName: string,
    lastName: string,
  ) => {
    this.authService.register(email, password, firstName, lastName);
  }

  readonly handleLogout = () => {
    this.authService.logout();
  }
}
