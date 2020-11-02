import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SeasonComponent } from './season/season.component';
import { WeekComponent } from './week/week.component';
import { MatchupComponent } from './matchup/matchup.component';

const routes: Routes = [
	{ path: 'home', component: HomeComponent,
		children:[
			{ path: 'season/:season/:weekType', component: SeasonComponent,
				children: [
					{ path: 'week/:weekNum', component: WeekComponent,
						children: [
							{ path: 'matchup/:id', component: MatchupComponent}
						]
					}
				]
			},
		]
	},
	{ path: 'about', component: AboutComponent},
	{ path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
