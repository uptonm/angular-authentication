import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // tslint:disable-next-line:no-inferrable-types
  loggedIn = false;
  user: {};
  authSubscription;

  constructor(private authService: AuthService, private router: Router) {
    this.router.events.subscribe(val => {
      const user = this.authService.getUserAuth();
      if (!user) {
        this.loggedIn = false;
      } else {
        this.loggedIn = true;
        this.user = user;
      }
    });
  }

  ngOnInit() {}

  onLogout() {
    this.authService.logOut();
    this.loggedIn = false;
  }
}
