import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDetailComponent } from './create-detail.component';

describe('CreateDetailComponent', () => {
  let component: CreateDetailComponent;
  let fixture: ComponentFixture<CreateDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateDetailComponent]
    });
    fixture = TestBed.createComponent(CreateDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
