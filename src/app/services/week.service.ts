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
export class WeekService {

  constructor(private http: HttpClient) { }

  getMatchups(season: string, weekType: string, weekNum: string): Observable<Matchup[]> {
  	return this.http.get<Matchup[]>(
  		baseURL + 'matchups?'+ 
      'year=' + season +
      '&' +
  		'weekType=' + weekType + 
  		'&' + 
  		'weekNum=' + weekNum
  	);
  }


}
