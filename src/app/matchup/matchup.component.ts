import { Component, ViewEncapsulation, OnInit, Inject, Input } from '@angular/core';

import { Matchup } from '../shared/matchup';
import { Team } from '../shared/team';
import { TeamStatsOP } from '../shared/teamStats/OP';
import { TeamStatsOR } from '../shared/teamStats/OR';
import { TeamStatsDP } from '../shared/teamStats/DP';
import { TeamStatsDR } from '../shared/teamStats/DR';
import { TeamStats } from '../shared/teamStats';

import { SeasonService } from '../services/season.service';
import { WeekService } from '../services/week.service';
import { TeamService } from '../services/team.service';
import { MatchupService } from '../services/matchup.service';
import { TeamStatsService } from '../services/team-stats.service'

import { Router, ActivatedRoute, Params, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { forkJoin, of, timer} from 'rxjs';

@Component({
  selector: 'app-matchup',
  templateUrl: './matchup.component.html',
  styleUrls: ['./matchup.component.scss'],
})
export class MatchupComponent implements OnInit {

  @Input() matchups;

  constructor(private weekService: WeekService,
  	private teamService: TeamService,
  	private matchupService: MatchupService,
    private teamStatsService: TeamStatsService,
  	@Inject('BaseURL') private BaseURL,
  	private route: ActivatedRoute,
    private router: Router) { }

  matchup: Matchup;
  season: string;
  weekType: string;
  weekNum: string;

  id1: string;
  id2: string;

  name1: string;
  name2: string;

  team1Stats: TeamStats;
  team2Stats: TeamStats;

  team1OP: TeamStatsOP;
  team1OR: TeamStatsOR;
  team1DP: TeamStatsDP;
  team1DR: TeamStatsDR;

  team2OP: TeamStatsOP;
  team2OR: TeamStatsOR;
  team2DP: TeamStatsDP;
  team2DR: TeamStatsDR;

  div1 = false;
  div2 = false;
  div3 = false;
  div4 = false;

  ngOnInit(): void {
    this.route.parent.parent.params.subscribe(
      (params:Params) => {this.season=params['season'];this.weekType=params['weekType'];});

	  this.route.parent.params.subscribe(
		  (params:Params) => {this.weekNum=params['weekNum']});

    console.log([this.weekType,this.weekNum]);

  	this.route.params.pipe(switchMap(
      (params:Params) => this.matchupService.getMatchup(this.season,this.weekType,this.weekNum,params['id'])))
      .subscribe((matchup) => 
        { this.matchup = matchup[0];
          this.id1 = matchup[0]['team1'];
          this.id2 = matchup[0]['team2'];
          this.name1 = this.teamService.getTeamName(matchup[0]['team1']);
          this.name2 = this.teamService.getTeamName(matchup[0]['team2']);
          this.getStats();
        },
      );
  }

  getStats(){
    forkJoin(
      this.teamStatsService.getTeamStatsOP(this.name1,this.season,this.weekType),
      this.teamStatsService.getTeamStatsOR(this.name1,this.season,this.weekType),
      this.teamStatsService.getTeamStatsDP(this.name1,this.season,this.weekType),
      this.teamStatsService.getTeamStatsDR(this.name1,this.season,this.weekType),
      this.teamStatsService.getTeamStatsOP(this.name2,this.season,this.weekType),
      this.teamStatsService.getTeamStatsOR(this.name2,this.season,this.weekType),
      this.teamStatsService.getTeamStatsDP(this.name2,this.season,this.weekType),
      this.teamStatsService.getTeamStatsDR(this.name2,this.season,this.weekType)
    ).subscribe(response => {
      this.team1OP=<any>response[0];
      this.team1OR=<any>response[1];
      this.team1DP=<any>response[2];
      this.team1DR=<any>response[3];
      this.team2OP=<any>response[4];
      this.team2OR=<any>response[5];
      this.team2DP=<any>response[6];
      this.team2DR=<any>response[7];
      this.team1Stats = {
      'team': this.teamService.getTeam(this.id1),
        'op': this.team1OP[0],
        'or': this.team1OR[0],
        'dp': this.team1DP[0],
        'dr': this.team1DR[0],
      };
      this.team2Stats = {
        'team': this.teamService.getTeam(this.id2),
        'op': this.team2OP[0],
        'or': this.team2OR[0],
        'dp': this.team2DP[0],
        'dr': this.team2DR[0],
      };
    })
  }

  opAgg(team: TeamStatsOP): string {
    let features: number[] = [
      0.3*Number(team['Pass Yds(o)']),
      0.3*Number(team['Yds/Att(o)']),
      0.15*Number(team['Cmp %(o)']),
      0.15*Number(team['TD(o)']),
      0.1*(33-Number(team['INT(o)']))
    ];
    return String(Math.round(features.reduce((a,b) => a+b,0)));
  }

  dpAgg(team: TeamStatsDP): string {
    let features: number[] = [
      0.2*(33-Number(team['Yds(o)'])),
      0.25*(33-Number(team['Yds/Att(o)'])),
      0.2*(33-Number(team['Cmp %(o)'])),
      0.1*(33-Number(team['TD(o)'])),
      0.25*(Number(team['INT(o)']))
    ];
    return String(Math.round(features.reduce((a,b) => a+b,0)));
  }

  orAgg(team: TeamStatsOR): string {
    let features: number[] = [
      0.35*Number(team['Rush Yds(o)']),
      0.35*Number(team['YPC(o)']),
      0.2*Number(team['TD(o)']),
      0.1*(33-Number(team['Rush FUM(o)']))
    ];
    return String(Math.round(features.reduce((a,b) => a+b,0)));
  }

  drAgg(team: TeamStatsDR): string {
    let features: number[] = [
      0.35*(33-Number(team['Rush Yds(o)'])),
      0.3*(33-Number(team['YPC(o)'])),
      0.3*(33-Number(team['TD(o)'])),
      0.05*(Number(team['Rush FUM(o)']))
    ];
    return String(Math.round(features.reduce((a,b) => a+b,0)));
  }

  show1() {
    this.div1 = !this.div1;
  }

  show2() {
    this.div2 = !this.div2;
  }

  show3() {
    this.div3 = !this.div3;
  }

  show4() {
    this.div4 = !this.div4;
  }

  reverse(num: string) {
    return String(33 - parseInt(num));
  }

  color(numString: string) {
    let rank = parseInt(numString);
    if (rank <= 10) {
      return {'color': '#229954'}
    }
    if (rank >= 22) {
      return {'color': '#A93226'}
    }
  }

}

