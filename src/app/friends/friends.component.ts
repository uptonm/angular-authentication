import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  friend: User;
  friends: User[] = [
    new User(
      'Mike',
      'Upton',
      'uptonm@wit.edu',
      '/assets/images/matthew.png',
      'This is my first bio, Idk what to say.',
      [new User('Bob', 'smith', 'smithb@wit.edu', 'assets/images/veronika.jpg')]
    )
  ];
  constructor() {}

  ngOnInit() {}
}
