import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { baseURL } from '../shared/baseurl';
//import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { HttpHeaders } from '@angular/common/http';

import { Week } from '../shared/week';
import { Matchup } from '../shared/matchup';

@Injectable({
  providedIn: 'root'
})
export class SeasonService {

  constructor(private http: HttpClient) { }

  getWeeks(weekType: string): Observable<Week[]> {
  	console.log(weekType);
  	return this.http.get<Week[]>(baseURL + 'weeks?weekType=' + weekType);
  }

}
