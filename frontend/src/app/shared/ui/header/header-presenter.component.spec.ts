import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPresenterComponent } from './header-presenter.component';

describe('HeaderComponent', () => {
  let component: HeaderPresenterComponent;
  let fixture: ComponentFixture<HeaderPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderPresenterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
