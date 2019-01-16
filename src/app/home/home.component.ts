import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  getStarted() {
    if (this.authService.getUserAuth() === false) {
      this.router.navigate(['/signup']);
    } else {
      this.router.navigate(['/login']);
    }
  }
}
