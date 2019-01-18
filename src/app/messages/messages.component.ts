import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../shared/message.model';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  @Input() selected: Message;
  constructor() {}

  ngOnInit() {}

  onChange(event) {
    this.selected = event;
    console.log(event.to);
  }
}
