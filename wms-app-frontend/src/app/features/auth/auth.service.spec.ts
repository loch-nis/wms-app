import { fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import { AuthService } from './auth.service';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { TokenService } from '../../core/services/token.service';
import { environment } from '../../../environments/environment';
import { provideHttpClient } from '@angular/common/http';

describe('AuthService', () => {
  let service: AuthService;
  let httpClientMock: HttpTestingController;
  let tokenServiceSpy: jasmine.SpyObj<TokenService>;

  beforeEach(() => {
    tokenServiceSpy = jasmine.createSpyObj('TokenService', [
      'setToken',
      'getTokenExpiry',
      'hasToken',
      'setTokenExpiry',
    ]);

    TestBed.configureTestingModule({
      providers: [
        AuthService,
        provideHttpClient(),
        provideHttpClientTesting(),
        { provide: TokenService, useValue: tokenServiceSpy },
      ],
    });

    httpClientMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpClientMock.verify());

  it('should authenticate the user and initialize state on success', () => {
    const mockLoginResponse = {
      access_token: 'abc',
      expires_in: 3600,
    };
    const mockUser = {
      id: 1,
      email: 'test@example.com',
      first_name: 'John',
      last_name: 'Doe',
    };

    service = TestBed.inject(AuthService);

    service
      .login({ email: 'test@example.com', password: 'password' })
      .subscribe();

    const loginRequest = httpClientMock.expectOne(
      `${environment.apiUrl}/auth/login`,
    );
    tokenServiceSpy.hasToken.and.returnValue(true);
    loginRequest.flush(mockLoginResponse);

    expect(tokenServiceSpy.setToken).toHaveBeenCalledWith('abc');

    const meRequest = httpClientMock.expectOne(`${environment.apiUrl}/auth/me`);
    meRequest.flush(mockUser);

    expect(service.isLoggedIn()).toBeTrue();
    expect(service.authUser()).toEqual(mockUser);
  });

  it('should schedule token refresh when a valid token exists', fakeAsync(() => {
    const expiryIn65Seconds = Date.now() + 65_000;
    tokenServiceSpy.hasToken.and.returnValue(true);
    tokenServiceSpy.getTokenExpiry.and.returnValue(expiryIn65Seconds);

    service = TestBed.inject(AuthService);
    tick();

    tick(5000);

    const refreshTokenRequest = httpClientMock.expectOne(
      `${environment.apiUrl}/auth/refresh`,
    );

    refreshTokenRequest.flush({
      access_token: 'new_abc',
      expires_in: 3600,
    });

    expect(tokenServiceSpy.setToken).toHaveBeenCalledWith('new_abc');

    // Clean-up
    (service as any)._tokenExpiry.set(undefined);
    TestBed.tick();

    flush();
  }));
});

// ng test --watch=false --browsers=ChromeHeadless
