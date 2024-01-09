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
  isDragging: boolean = false;
  clickTime: Date = new Date();
  constructor() {
  }

  ngAfterViewInit() {
    const menu = document.querySelector(".chat--widget__minimized");
        const toggle = document.querySelector(".chat--widget__minimized__container");

        toggle?.addEventListener("click", () => {
            menu?.classList.toggle("active");
        })
        const draggableDiv = document.getElementById('menupopup');

        if(draggableDiv){
          let offset = { x: 0, y: 0 };

          draggableDiv.addEventListener('mousedown', (e) => {
            this.isDragging = true;
            this.clickTime = new Date();
              offset.x = e.clientX - draggableDiv.getBoundingClientRect().left;
              offset.y = e.clientY - draggableDiv.getBoundingClientRect().top;

              e.preventDefault();
          });

          document.addEventListener('mousemove', (e) => {

            if (!this.isDragging) return;

            const left = e.clientX - offset.x;
            const top = e.clientY - offset.y;

            draggableDiv.style.left = left + 'px';
            draggableDiv.style.top = top + 'px';

          });

          document.addEventListener('mouseup', () => {
            this.isDragging = false;
          });
        }

        
  }

  ngOnInit(): void {
  }
  toggleChatView(isMinimized: boolean) {
    if(isMinimized){
      this.minimizeChatView = isMinimized;
      return;
    }
    const timeSinceLastMouseUp = new Date().getTime() - this.clickTime.getTime();

    if (!this.isDragging && timeSinceLastMouseUp < 100) {
      this.minimizeChatView = isMinimized;
    }
  }
  close($event: Event) {
    $event.stopPropagation();
    this.isClosed = true
  }
  forceLoadLink() {
    this.fetchLink.emit();
  }
}
