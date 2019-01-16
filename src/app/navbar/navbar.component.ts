import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // tslint:disable-next-line:no-inferrable-types
  loggedIn: boolean = false;
  authSubscription;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.loggedIn = this.authService.getUserAuth();
  }

  onLogout() {
    this.authService.logOut();
    this.loggedIn = false;
  }
}
