import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';

import { Bet } from '../../models/bet';

@Component({
  selector: 'app-bet-form',
  templateUrl: './bet-form.component.html',
  styleUrls: ['./bet-form.component.css']
})
export class BetFormComponent implements OnInit {

  prediction: number;
  response: string;
  private rate: number;
  private time: string;
  private hours: number;
  private coins: number; // number of coins to bet
  private balance: number; // number of coins in account
  private bets: Bet[];

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.updateBitcoinRate();
    this.time = new Date().toLocaleTimeString();
    this.hours = new Date().getHours();
    this.coins = 5;
    setInterval(() => this.updateBitcoinRate(), 5 * 60 * 1000);
  }

  private updateBitcoinRate() {
    this.time = new Date().toLocaleTimeString();
    this.dataService.getRate()
      .subscribe(
      data => this.rate = data['bpi']['INR']['rate_float'],
      err => console.error(err)
      );
  }

  newRound() {
    this.dataService.newRound().subscribe(data => this.response = data['txHash'], err => this.response = err['error']);
  }

  declare() {
    this.dataService.declare().subscribe(data => this.response = data['txHash'], err => this.response = err['error']);
  }

  resolve() {
    this.dataService.resolve().subscribe(data => this.response = data['txHash'], err => this.response = err['error']);
  }

}
