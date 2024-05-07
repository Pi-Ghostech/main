import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntreprisesTemplateComponent } from './entreprises-template.component';

describe('EntreprisesTemplateComponent', () => {
  let component: EntreprisesTemplateComponent;
  let fixture: ComponentFixture<EntreprisesTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntreprisesTemplateComponent]
    });
    fixture = TestBed.createComponent(EntreprisesTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
