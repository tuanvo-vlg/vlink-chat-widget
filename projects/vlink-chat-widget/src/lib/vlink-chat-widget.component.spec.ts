import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VlinkChatWidgetComponent } from './vlink-chat-widget.component';

describe('VlinkChatWidgetComponent', () => {
  let component: VlinkChatWidgetComponent;
  let fixture: ComponentFixture<VlinkChatWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VlinkChatWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VlinkChatWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
