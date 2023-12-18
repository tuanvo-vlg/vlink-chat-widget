import { NgModule } from '@angular/core';
import { VlinkChatWidgetComponent } from './vlink-chat-widget.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    VlinkChatWidgetComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    VlinkChatWidgetComponent
  ]
})
export class VlinkChatWidgetModule { }
