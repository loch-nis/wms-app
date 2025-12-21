import { Component, inject, computed, effect } from '@angular/core';
import { AuthService } from '../../auth.service';
import { LoginPresenterComponent } from '../../components/login-presenter/login-presenter.component';
import { RegisterPresenterComponent } from '../../components/register-presenter/register-presenter.component';
import { Router } from '@angular/router';
import { NotificationService } from '../../../../core/services/notification.service';
import { AuthMode } from '../../models/auth.model';
import { LoginRequest, RegisterRequest } from '../../models/auth.model';

@Component({
  selector: 'app-auth-container',
  imports: [LoginPresenterComponent, RegisterPresenterComponent],
  templateUrl: './auth-container.component.html',
})
export class AuthContainerComponent {
  private authService = inject(AuthService);
  private router = inject(Router);
  private readonly notification = inject(NotificationService);

  readonly mode = computed<AuthMode>(() => {
    switch (this.router.url) {
      case '/auth/register':
        return 'register';
      case '/auth/logout':
        return 'logout';
      default:
        return 'login';
    }
  });

  logoutEffect = effect(() => {
    if (this.mode() !== 'logout') return;

    this.authService.logout().subscribe({
      next: () => {
        this.notification.showSuccess('Logout successful');
        this.router.navigateByUrl('auth/login');
      },
      error: () => {
        console.warn('Error posting to logout endpoint');
        this.router.navigateByUrl('auth/login');
      },
    });
  });

  readonly handleLogin = (credentials: LoginRequest) => {
    this.authService.login(credentials).subscribe({
      next: () => {
        this.notification.showSuccess('Login successful');
        this.router.navigateByUrl('home');
      },
      error: (error) => {
        if (error.status === 401) {
          this.notification.showError('Login failed, wrong password or email');
        }
      },
    });
  };

  readonly handleRegister = (newUser: RegisterRequest) => {
    this.authService.register(newUser).subscribe({
      next: () => {
        this.router.navigateByUrl('auth/login');
        this.notification.showSuccess('Registration successful');
      },
      error: () => {
        this.notification.showError('Registration failed');
      },
    });
  };
}
