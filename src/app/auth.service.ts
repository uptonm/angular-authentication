import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // tslint:disable-next-line:no-inferrable-types
  loggedIn: boolean = true;

  constructor() {}
  getUserAuth(): boolean {
    return this.loggedIn;
  }
  logIn(): void {
    this.loggedIn = true;
  }
  logOut(): void {
    this.loggedIn = false;
  }
}
