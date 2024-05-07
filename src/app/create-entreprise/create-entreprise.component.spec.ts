import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEntrepriseComponent } from './create-entreprise.component';

describe('CreateEntrepriseComponent', () => {
  let component: CreateEntrepriseComponent;
  let fixture: ComponentFixture<CreateEntrepriseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateEntrepriseComponent]
    });
    fixture = TestBed.createComponent(CreateEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
