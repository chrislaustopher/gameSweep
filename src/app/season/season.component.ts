import { Component, ViewEncapsulation, OnInit, Inject, Input } from '@angular/core';
import { Team } from '../shared/team';
import { SeasonService } from '../services/season.service';

import { HomeComponent } from '../home/home.component';
import { Week } from '../shared/week';

import { WeekType } from '../shared/weekType';

import { Router, ActivatedRoute, Params, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.scss']
})
export class SeasonComponent implements OnInit {

  constructor(private seasonService: SeasonService,
  	@Inject('BaseURL') private BaseURL,
  	private route: ActivatedRoute,
    private router: Router) { }

  weeks: Week[];

  ngOnInit(): void {
  	this.route.params.pipe(switchMap(
      (params:Params) => this.seasonService.getWeeks(params['weekType'])))
      .subscribe((weeks) => { this.weeks = weeks });
  }

}
