import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'vlink-chat-widget',
  templateUrl: './chat-widget.component.html',
  styleUrls: ['./chat-widget.component.scss']
})
export class VlinkChatWidgetComponent implements OnInit {
  @Input() public iframeUrl: SafeUrl | undefined;
  @Input() public classes: string = '';
  @Output() fetchLink: EventEmitter<any> = new EventEmitter();
  minimizeChatView: boolean = true;
  isClosed: boolean = false;
  constructor() {
  }

  ngOnInit(): void {
  }
  toggleChatView() {
    this.minimizeChatView = !this.minimizeChatView;
  }
  close($event: Event) {
    $event.stopPropagation();
    this.isClosed = true
  }
  forceLoadLink() {
    this.fetchLink.emit();
  }
}
