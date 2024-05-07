import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterDetailComponent } from './ajouter-detail.component';

describe('AjouterDetailComponent', () => {
  let component: AjouterDetailComponent;
  let fixture: ComponentFixture<AjouterDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouterDetailComponent]
    });
    fixture = TestBed.createComponent(AjouterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
