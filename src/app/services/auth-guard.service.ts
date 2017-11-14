import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate() {
    // If the user is not logged in, redirect
    if (!this.authService.isUserLoggedIn()) {
      this.router.navigate(['/sign-in']);
      return false;
    }
    return true;
  }

}
