import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { MessageService } from '../messages/message-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // tslint:disable-next-line:no-inferrable-types
  auth: any = {};
  authSubscription: any;
  numMessages: number;

  constructor(
    private authService: AuthService,
    private messageService: MessageService,
    private router: Router
  ) {
    this.router.events.subscribe(val => {
      this.auth = this.authService.getUserAuth();
      this.numMessages = this.messageService.getMessages().length;
    });
  }

  ngOnInit() {}

  onLogout() {
    this.authService.logOut();
    this.auth = {};
  }

  loggedIn() {
    return !_.isEmpty(this.auth);
  }
}
