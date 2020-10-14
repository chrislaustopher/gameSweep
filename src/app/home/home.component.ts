import { Component, ViewEncapsulation, OnInit, Inject } from '@angular/core';
import { Team } from '../shared/team';
import { WeekType } from '../shared/weekType';

import { ApiService } from '../services/api.service';
import { TeamService } from '../services/team.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { SeasonComponent } from '../season/season.component';
import { WeekComponent } from '../week/week.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  constructor(private teamService: TeamService,
  	@Inject('BaseURL') private BaseURL) { 

  }

  form = new FormGroup({
    season: new FormControl('', Validators.required)
  })

  seasonList = [];

  season: String;

  teams: Team[];

  weekTypes: WeekType[]

  ngOnInit(): void {
    this.weekTypes = [
    {
      weekType: "PRE",
      weekTypeF: "Pre-Season"
    },
    {
      weekType: "REG",
      weekTypeF: "Regular Season"
    },
    {
      weekType: "POST",
      weekTypeF: "Post-Season"
    }
    ];
    this.seasonList = ['2020','2019'];
    this.season = this.seasonList[0];
  }

  submit(){}

  changeSeason(s) {
    this.season = s.target.value
  }
}
