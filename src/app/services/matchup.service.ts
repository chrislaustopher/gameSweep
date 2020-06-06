import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { baseURL } from '../shared/baseurl';
import { HttpHeaders } from '@angular/common/http';

import { Week } from '../shared/week';
import { Matchup } from '../shared/matchup';

import { TeamService } from '../services/team.service';


@Injectable({
  providedIn: 'root'
})
export class MatchupService {

  constructor(private http: HttpClient) { }

  getMatchup(weekType: string, weekNum: string, matchupId: string): Observable<Matchup> {
  	return this.http.get<Matchup>(
  		baseURL + 'matchups?'+ 
  		'weekType=' + weekType + 
  		'&' + 
  		'weekNum=' + weekNum + 
  		'&' +
  		'matchupId=' + matchupId
  	);
  }
}
