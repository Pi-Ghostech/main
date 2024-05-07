import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateErrorFrontComponent } from './create-error-front.component';

describe('CreateErrorFrontComponent', () => {
  let component: CreateErrorFrontComponent;
  let fixture: ComponentFixture<CreateErrorFrontComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateErrorFrontComponent]
    });
    fixture = TestBed.createComponent(CreateErrorFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
