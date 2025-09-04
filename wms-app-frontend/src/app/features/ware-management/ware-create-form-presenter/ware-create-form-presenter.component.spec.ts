import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WareCreateFormPresenterComponent } from './ware-create-form-presenter.component';

describe('CreateWareFormComponent', () => {
  let component: WareCreateFormPresenterComponent;
  let fixture: ComponentFixture<WareCreateFormPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WareCreateFormPresenterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WareCreateFormPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
