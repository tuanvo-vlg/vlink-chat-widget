import { TestBed } from '@angular/core/testing';

import { VlinkChatWidgetService } from './vlink-chat-widget.service';

describe('VlinkChatWidgetService', () => {
  let service: VlinkChatWidgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VlinkChatWidgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
