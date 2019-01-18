import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';
import { Router } from '@angular/router';

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
    return this.http.put('http://localhost:8000/api/users', user);
  }
}
