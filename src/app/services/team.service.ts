import { Injectable } from '@angular/core';
import { Team } from '../shared/team';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
//import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { HttpHeaders } from '@angular/common/http';
import { TEAMS } from '../shared/teams';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor() { }

  getTeamName(teamId: string): string {
  	return TEAMS.filter((team) => (team.teamId == teamId))[0]['Team'];
  }

  getTeamLoc(teamId: string): string {
  	return TEAMS.filter((team) => (team.teamId == teamId))[0]['teamLoc'];
  }

  getTeamImage(teamId: string): string {
  	return TEAMS.filter((team) => (team.teamId == teamId))[0]['image'];
  }

  getTeam(teamId: string): Team {
    return TEAMS.filter((team) => (team.teamId == teamId))[0];
  }
}
