import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // tslint:disable-next-line:no-inferrable-types
  loggedIn: boolean = true;
  user = {};

  constructor(private http: HttpClient, private router: Router) {}

  getUserAuth(): any {
    if (this.loggedIn) {
      return this.user;
    } else {
      return false;
    }
  }

  logIn(user): void {
    this.loggedIn = true;
    this.user = user;
    this.router.navigate(['/']);
  }

  logOut(): void {
    this.loggedIn = false;
  }

  signUp(user) {
    return this.http.post('http://localhost:8000/api/users', {
      username: user.email,
      password: user.password
    });
  }
}
