import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../shared/user.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  id: string;
  user: User;

  constructor(private route: ActivatedRoute, private authService: AuthService) {
    this.route.url.subscribe(() => {
      this.id = '' + this.route.snapshot.url[1];
    });
  }

  ngOnInit() {
    if (this.id === undefined) {
      console.log('worked');
    }
  }
}
