import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../shared/message.model';
import { User } from '../../shared/user.model';
import { MessageService } from '../message-service.service';

@Component({
  selector: 'app-message-view',
  templateUrl: './message-view.component.html',
  styleUrls: ['./message-view.component.css']
})
export class MessageViewComponent implements OnInit {
  @Input()
  selectedMessage: Message;
  messageList: Message[] = [];
  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.messageList = this.messageService.getMessages();
    this.selectedMessage = this.messageList[0];
  }
}
