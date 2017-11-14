import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  private newUser: boolean;
  private username: string;
  private password: string;
  private incorrectCredentials: boolean;

  constructor(private authService: AuthService) {
    this.newUser = false;
  }

  ngOnInit() {
  }

  authenticateUser() {
    this.newUser ? this.signUpUser() : this.signInUser();
  }

  signUpUser() {
    this.authService.signUp(this.username, this.password)
      .subscribe(success => this.success(success), err => this.failure(err));
  }

  signInUser() {
    this.authService.signIn(this.username, this.password)
      .subscribe(success => this.success(success), err => this.failure(err));
  }

  success(data) {
    this.authService.setUserAuthenticated(this.username, '');
    window.location.href = '';
  }

  private failure(err) {
    console.error(err);
    this.incorrectCredentials = true;
    this.password = '';
  }
}
