import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';

import { Leader } from '../../models/leader';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  leaders: Leader[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getLeaderBoard();
    setInterval(() => {
      this.getLeaderBoard();
    }, 5000);
  }

  private getLeaderBoard() {
    this.dataService.getLeaderBoard()
      .subscribe((data: Leader[]) => {
        this.leaders = data;
      }, err => err);
  }

}


