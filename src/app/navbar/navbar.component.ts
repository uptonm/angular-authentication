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
  user: {};
  authSubscription;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    const loggedIn = this.authService
      .getUserAuth()
      .subscribe((loggedIn: any) => {
        if (!loggedIn) {
          this.loggedIn = false;
        } else {
          this.user = loggedIn;
          this.loggedIn = true;
        }
      });
  }

  onLogout() {
    this.authService.logOut();
    this.loggedIn = false;
  }
}
