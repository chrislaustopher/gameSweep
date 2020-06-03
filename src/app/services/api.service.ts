import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  apiRequest(): void {

  }

  getTeam() {
  	this.http.get('https://api.nfl.com/v1/games')
  }
}
