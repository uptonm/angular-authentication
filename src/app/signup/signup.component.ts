import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user = {
    email: '',
    password: '',
    confirmPassword: ''
  };
  passwordStrength = {
    percent: 0,
    class: 'warning',
    message: ''
  };

  errors: string[] = [];

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  onSignup() {
    this.validate();
    if (this.errors.length === 0) {
      console.log(this.user);
    }
  }

  validate() {
    this.errors = [];
    if (this.user.password !== this.user.confirmPassword) {
      console.log('worked');
      this.errors.push('Passwords must match');
    }
    if (this.user.password.length < 8) {
      this.errors.push('Passwords must be at least 8 characters');
    }
    if (this.user.email.length === 0) {
      this.errors.push('An email is required');
    }
    if (
      this.passwordStrength.percent <= 30 &&
      this.passwordStrength.message !== ''
    ) {
      this.errors.push(this.passwordStrength.message);
    }
  }

  analyze(value) {
    const strongRegex = new RegExp(
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'
    );
    const mediumRegex = new RegExp(
      '^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})'
    );
    if (strongRegex.test(value)) {
      this.passwordStrength.message = 'Strong Password';
      this.passwordStrength.percent = 100;
      this.passwordStrength.class = 'success';
    } else if (mediumRegex.test(value)) {
      this.passwordStrength.message = 'Decent Password';
      this.passwordStrength.percent = 60;
      this.passwordStrength.class = 'warning';
    } else {
      this.passwordStrength.message = 'Password not acceptable';
      this.passwordStrength.percent = 30;
      this.passwordStrength.class = 'error';
    }

    if (value.length < 3) {
      this.passwordStrength.message = 'Password is too short';
      this.passwordStrength.percent = 10;
      this.passwordStrength.class = 'error';
    }
  }
}
