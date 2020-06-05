import { Component, OnInit, Inject, Input } from '@angular/core';

import { Matchup } from '../shared/matchup';

import { Router, ActivatedRoute, Params, ParamMap } from '@angular/router';
import { SeasonService } from '../services/season.service';

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.scss']
})
export class WeekComponent implements OnInit {

  constructor(private seasonService: SeasonService,
  	@Inject('BaseURL') private BaseURL,
  	private route: ActivatedRoute,
    private router: Router) { }

  matchups: Matchup[];

  ngOnInit(): void {
  }

}
