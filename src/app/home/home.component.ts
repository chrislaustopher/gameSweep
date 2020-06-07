import { Component, ViewEncapsulation, OnInit, Inject } from '@angular/core';
import { Team } from '../shared/team';
import { WeekType } from '../shared/weekType';

import { ApiService } from '../services/api.service';
import { TeamService } from '../services/team.service';

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
  }
}
