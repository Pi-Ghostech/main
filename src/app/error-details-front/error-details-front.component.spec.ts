import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorDetailsFrontComponent } from './error-details-front.component';

describe('ErrorDetailsFrontComponent', () => {
  let component: ErrorDetailsFrontComponent;
  let fixture: ComponentFixture<ErrorDetailsFrontComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorDetailsFrontComponent]
    });
    fixture = TestBed.createComponent(ErrorDetailsFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
