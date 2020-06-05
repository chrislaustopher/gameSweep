import { Component, OnInit, Inject, Input } from '@angular/core';

import { Matchup } from '../shared/matchup';
import { Team } from '../shared/team';

import { SeasonService } from '../services/season.service';
import { WeekService } from '../services/week.service';
import { TeamService } from '../services/team.service';

import { Router, ActivatedRoute, Params, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.scss']
})
export class WeekComponent implements OnInit {

  constructor(private weekService: WeekService,
  	private teamService: TeamService,
  	@Inject('BaseURL') private BaseURL,
  	private route: ActivatedRoute,
    private router: Router) { }

  matchups: Matchup[];
  team: [];

  ngOnInit(): void {
  	console.log(this.route.params);
  	this.route.params.pipe(switchMap(
      (params:Params) => this.weekService.getMatchups(params['weekType'],params['weekNum'])))
      .subscribe((matchups) => { this.matchups = matchups; console.log(matchups);});

  }

  addOne(num: string): number {
  	return parseInt(num)+1;
  }

  teamLoc(teamId: string): string {
    return this.teamService.getTeamLoc(teamId);
  }

  teamName(teamId: string): string {
    return this.teamService.getTeamName(teamId);
  }

}
