import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes, CanActivate } from '@angular/router';

import { AppComponent } from './app.component';
import { BetFormComponent } from './components/bet-form/bet-form.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignInComponent } from './components/sign-in/sign-in.component';


import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { DataService } from './services/data.service';

import { OrderByPipe } from './components/leaderboard/sort.pipe';

const appRoutes: Routes = [
  {
    path: '',
    component: BetFormComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'leaderboard',
    component: LeaderboardComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'sign-in',
    component: SignInComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    BetFormComponent,
    NavbarComponent,
    SignInComponent,
    LeaderboardComponent,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthGuardService,
    AuthService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
