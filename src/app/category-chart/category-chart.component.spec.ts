import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryChartComponent } from './category-chart.component';

describe('CategoryChartComponent', () => {
  let component: CategoryChartComponent;
  let fixture: ComponentFixture<CategoryChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryChartComponent]
    });
    fixture = TestBed.createComponent(CategoryChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
