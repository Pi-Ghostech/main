import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorsDetailsBackComponent } from './errors-details-back.component';

describe('ErrorsDetailsBackComponent', () => {
  let component: ErrorsDetailsBackComponent;
  let fixture: ComponentFixture<ErrorsDetailsBackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorsDetailsBackComponent]
    });
    fixture = TestBed.createComponent(ErrorsDetailsBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
