import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStageComponent } from './create-stage.component';

describe('CreateStageComponent', () => {
  let component: CreateStageComponent;
  let fixture: ComponentFixture<CreateStageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateStageComponent]
    });
    fixture = TestBed.createComponent(CreateStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
