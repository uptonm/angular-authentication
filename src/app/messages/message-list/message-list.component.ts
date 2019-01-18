import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { User } from '../../shared/user.model';
import { Message } from '../../shared/message.model';
import { MessageService } from '../message-service.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  @Input()
  message: Message;
  @Output()
  selectedMessage: EventEmitter<Message> = new EventEmitter<Message>();
  messages: Message[] = [];
  shouldDim = true;
  constructor(private messageService: MessageService) {}

  ngOnInit() {
    const messageTemp = this.messageService.getMessages();
    setTimeout(() => {
      this.messages = messageTemp;
      this.shouldDim = false;
    }, 0);
  }

  onSelectMessage(message: Message): void {
    this.message = message;
    this.selectedMessage.emit(message);
  }
}
