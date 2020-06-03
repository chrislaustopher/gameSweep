import { Component, OnInit, Inject } from '@angular/core';
import { Team } from '../shared/team';
import { ApiService } from '../services/api.service';
import { TeamService } from '../services/team.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private teamService: TeamService,
  	@Inject('BaseURL') private BaseURL) { }

  teams: Team[];

  ngOnInit(): void {
  	this.teamService.getTeams()
  		.subscribe((teams) => this.teams=teams);
  }



}
