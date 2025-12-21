import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderPresenterComponent } from './header-presenter.component';
import { signal, WritableSignal } from '@angular/core';
import { AuthUser } from '../../../features/auth/models/auth.model';
import { provideRouter } from '@angular/router';
import { AuthService } from '../../../features/auth/auth.service';
import { By } from '@angular/platform-browser';

describe('HeaderPresenterComponent', () => {
  let component: HeaderPresenterComponent;
  let fixture: ComponentFixture<HeaderPresenterComponent>;
  let mockAuthUserSignal: WritableSignal<AuthUser | undefined>;

  beforeEach(async () => {
    mockAuthUserSignal = signal(undefined);

    const authServiceMock = {
      authUser: mockAuthUserSignal.asReadonly(),
    };

    await TestBed.configureTestingModule({
      imports: [HeaderPresenterComponent],
      providers: [
        provideRouter([]),
        {
          provide: AuthService,
          useValue: authServiceMock,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // todo self-quiz: why is this needed?
  });

  it('should render all menu items', () => {
    const menuLinks = fixture.debugElement.queryAll(By.css('.menu-items a'));

    expect(menuLinks.length).toBe(component.menuItems.length);
  });

  it('should render the home menu item with correct link', () => {
    const allLinks = fixture.debugElement.queryAll(By.css('a'));

    const homeLink = allLinks.find((element) =>
      element.nativeElement.textContent.includes('Home'),
    );

    expect(homeLink?.nativeElement.getAttribute('href')).toBe('/');
  });

  it('should show login and register buttons when user is not logged in', () => {
    const loginButton = fixture.debugElement.query(
      By.css('a[routerLink="/auth/login"]'),
    );
    const registerButton = fixture.debugElement.query(
      By.css('a[routerLink="/auth/register"]'),
    );
    const logoutButton = fixture.debugElement.query(
      By.css('a[routerLink="/auth/logout"]'),
    );

    expect(loginButton).toBeTruthy();
    expect(registerButton).toBeTruthy();
    expect(logoutButton).toBeNull();
  });

  it('should show logout button and user first name when user is logged in', () => {
    const mockUser: AuthUser = {
      id: 1,
      email: 'john@example.com',
      first_name: 'John',
      last_name: 'Doe',
    };
    mockAuthUserSignal.set(mockUser);

    fixture.detectChanges(); // todo self-quiz: why is this needed?

    const loginButton = fixture.debugElement.query(
      By.css('a[routerLink="/auth/login"]'),
    );
    const logoutButton = fixture.debugElement.query(
      By.css('a[routerLink="/auth/logout"]'),
    );
    const greeting = fixture.debugElement.query(By.css('h2'));

    expect(loginButton).toBeNull();
    expect(logoutButton).toBeTruthy();
    expect(greeting.nativeElement.textContent).toContain('John');
  });
});
