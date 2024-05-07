import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatProjetComponent } from './chat-projet.component';

describe('ChatProjetComponent', () => {
  let component: ChatProjetComponent;
  let fixture: ComponentFixture<ChatProjetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatProjetComponent]
    });
    fixture = TestBed.createComponent(ChatProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
