import {
  ApplicationConfig,
  inject,
  provideAppInitializer,
  provideZoneChangeDetection,
  isDevMode,
  PLATFORM_ID,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './features/auth/interceptors/auth.interceptor';
import { AuthService } from './features/auth/auth.service';
import { networkErrorInterceptor } from './core/interceptors/network-error.interceptor';
import { provideServiceWorker } from '@angular/service-worker';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([authInterceptor, networkErrorInterceptor]),
    ),
    provideAppInitializer(() => {
      const platformId = inject(PLATFORM_ID);
      const authService = inject(AuthService);

      if (isPlatformBrowser(platformId)) {
        authService.loadUserFromToken();
      }
      return;
    }),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000',
    }),
    provideClientHydration(withEventReplay()),
  ],
};
