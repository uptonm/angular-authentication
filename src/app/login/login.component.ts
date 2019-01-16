import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: object = {
    email: '',
    password: ''
  };
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  onLogin() {
    this.authService.logIn(this.user);
  }
}
