import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.model';
import { Message } from '../shared/message.model';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  messages: Message[] = [
    new Message(
      new User(
        'Mike',
        'Upton',
        'uptonm@wit.edu',
        'I am not good at making bios',
        'assets/images/matthew.png'
      ),
      new User(
        'Rachel',
        'Sorrins',
        'sorrinsr@complet.io',
        'Something about dogs would probably fit well here. DOGS!',
        'assets/images/rachel.png'
      ),
      'Subject goes here',
      'The quick fox jumped over the lazy brown dog'
    ),
    new Message(
      new User(
        'Mike',
        'Upton',
        'uptonm@wit.edu',
        'I am not good at making bios',
        'assets/images/matthew.png'
      ),
      new User(
        'Rachel',
        'Sorrins',
        'sorrinsr@complet.io',
        'Something about dogs would probably fit well here. DOGS!',
        'assets/images/rachel.png'
      ),
      'Subject goes here',
      'The quick fox jumped over the lazy brown dog'
    ),
    new Message(
      new User(
        'Mike',
        'Upton',
        'uptonm@wit.edu',
        'I am not good at making bios',
        'assets/images/matthew.png'
      ),
      new User(
        'Rachel',
        'Sorrins',
        'sorrinsr@complet.io',
        'Something about dogs would probably fit well here. DOGS!',
        'assets/images/rachel.png'
      ),
      'Subject goes here',
      'The quick fox jumped over the lazy brown dog'
    ),
    new Message(
      new User(
        'Mike',
        'Upton',
        'uptonm@wit.edu',
        'I am not good at making bios',
        'assets/images/matthew.png'
      ),
      new User(
        'Rachel',
        'Sorrins',
        'sorrinsr@complet.io',
        'Something about dogs would probably fit well here. DOGS!',
        'assets/images/rachel.png'
      ),
      'Subject goes here',
      'The quick fox jumped over the lazy brown dog'
    )
  ];
  constructor() {}

  ngOnInit() {}
}
