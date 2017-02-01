import { NgModule }     from '@angular/core';
import { Routes }       from '@angular/router';
import { RouterModule } from '@angular/router'

import { WeatherPanelComponent }  from './components/weather-panel.component';
import { WeatherApiKeyComponent } from './components/weather-api-key.component';
import { WeatherAboutComponent }  from './components/weather-about.component';

const routes: Routes = [
	{ path: 'weather-panel', component: WeatherPanelComponent },
	{ path: 'api-key',        component: WeatherApiKeyComponent },
	{ path: 'about',          component: WeatherAboutComponent },
	{ path: '', redirectTo: '/weather-panel', pathMatch: 'full'}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
