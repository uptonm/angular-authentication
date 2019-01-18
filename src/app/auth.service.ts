import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';
import { Router } from '@angular/router';
import { User } from './shared/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // tslint:disable-next-line:no-inferrable-types
  auth: any = false;
  users: User[] = [
    new User(
      'Mike',
      'Upton',
      'uptonm@wit.edu',
      'assets/images/matthew.png',
      'I am not good at making bios'
    )
  ];

  constructor(private http: HttpClient, private router: Router) {}

  getUserAuth(): any {
    return this.auth;
  }

  logIn(user): void {
    this.auth = user;
    this.router.navigate(['/']);
  }

  logOut(): void {
    this.auth = {};
  }

  signUp(user) {
    return this.http.put('http://localhost:8000/api/users', user);
  }

  getUser(email: string) {
    return this.users.map(user => {
      if (user.getEmail() === email) {
        return user;
      }
    });
  }

  isAuthenticated() {
    if (_.isEmpty(this.auth)) {
      return false;
    } else {
      return true;
    }
  }
}
