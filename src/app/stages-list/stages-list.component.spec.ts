import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StagesListComponent } from './stages-list.component';

describe('StagesListComponent', () => {
  let component: StagesListComponent;
  let fixture: ComponentFixture<StagesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StagesListComponent]
    });
    fixture = TestBed.createComponent(StagesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
