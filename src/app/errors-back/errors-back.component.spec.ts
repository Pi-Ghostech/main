import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorsBackComponent } from './errors-back.component';

describe('ErrorsBackComponent', () => {
  let component: ErrorsBackComponent;
  let fixture: ComponentFixture<ErrorsBackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorsBackComponent]
    });
    fixture = TestBed.createComponent(ErrorsBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
