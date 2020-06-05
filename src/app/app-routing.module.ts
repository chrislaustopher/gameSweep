import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SeasonComponent } from './season/season.component';
import { WeekComponent } from './week/week.component';

const routes: Routes = [
	{ path: 'home', component: HomeComponent,
		children:[
			{ path: 'season/:weekType', component: SeasonComponent,
				children: [
					{ path: 'week/:weekType/:weekNum', component: WeekComponent}
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
