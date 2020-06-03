import { Injectable } from '@angular/core';
import { Team } from '../shared/team';
import { TEAMS } from '../shared/teams';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
//import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) { }

  getTeams(): Observable<Team[]> {
  	return this.http.get<Team[]>(baseURL + 'teams');
  }
}
