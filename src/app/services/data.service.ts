import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AuthService } from './auth.service';

import { Bet } from '../models/bet';
import { Leader } from '../models/leader';

import { environment } from '../../environments/environment';

@Injectable()
export class DataService {

  private coindeskAPI: string;
  private username: string;
  private bets: Bet[];

  constructor(private authService: AuthService, public http: HttpClient) {
    this.coindeskAPI = 'https://api.coindesk.com/v1/bpi/currentprice/inr.json';
    this.username = this.authService.getUsername();
  }

  getRate() {
    return this.http.get(this.coindeskAPI);
  }

  getLeaderBoard() {
    return this.http
      .get(environment.apiUrl + '/admin/leaderboard');
  }

  newRound() {
    return this.http
      .post(environment.apiUrl + '/admin/new-round', { });
  }

  declare() {
    return this.http
      .post(environment.apiUrl + '/admin/declare', { });
  }

  resolve() {
    return this.http
      .post(environment.apiUrl + '/admin/resolve', { });
  }


}
