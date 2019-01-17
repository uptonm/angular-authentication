import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';
import { Router } from '@angular/router';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // tslint:disable-next-line:no-inferrable-types
  auth: any = false;

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
    return this.http.put('http://localhost:8000/api/users', {
      username: user.email,
      password: user.password,
      first: user.first,
      last: user.last,
      bio: user.bio
    });
  }
}
