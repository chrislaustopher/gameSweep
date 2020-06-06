import { Injectable } from '@angular/core';
import { Team } from '../shared/team';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
//import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { HttpHeaders } from '@angular/common/http';
import { TEAMS } from '../shared/teams';

import { SeasonService } from '../services/season.service';
import { WeekService } from '../services/week.service';
import { TeamService } from '../services/team.service';
import { MatchupService } from '../services/matchup.service';

import { TeamStatsOP } from '../shared/teamStats/OP';
import { TeamStatsOR } from '../shared/teamStats/OR';
import { TeamStatsDP } from '../shared/teamStats/DP';
import { TeamStatsDR } from '../shared/teamStats/DR';
import { TeamStats } from '../shared/teamStats';

import { Router, ActivatedRoute, Params, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TeamStatsService {

  constructor(private http: HttpClient) {
  }

  getTeamStatsOP(name: string, weekType: string): Observable<TeamStatsOP> {
  	return this.http.get<TeamStatsOP>(baseURL+'teamStatsOP?'+ 'weekType='+weekType+'&'+'Team=' + name);
  }

  getTeamStatsOR(name: string, weekType: string): Observable<TeamStatsOR> {
  	return this.http.get<TeamStatsOR>(baseURL+'teamStatsOR?'+ 'weekType='+weekType+'&'+'Team=' + name);
  }

  getTeamStatsDP(name: string, weekType: string): Observable<TeamStatsDP> {
  	return this.http.get<TeamStatsDP>(baseURL+'teamStatsDP?'+ 'weekType='+weekType+'&'+'Team=' + name);
  }

  getTeamStatsDR(name: string, weekType: string): Observable<TeamStatsDR> {
  	return this.http.get<TeamStatsDR>(baseURL+'teamStatsDR?'+ 'weekType='+weekType+'&'+'Team=' + name);
  }

}
