import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPresenterComponent } from './login-presenter.component';

describe('LoginComponent', () => {
  let component: LoginPresenterComponent;
  let fixture: ComponentFixture<LoginPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginPresenterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
