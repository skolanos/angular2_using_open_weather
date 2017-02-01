import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { WeatherService } from './services/weather-service';

import { AppComponent }  from './app.component';
import { WeatherSearchComponent } from './components/weather-search.component';
import { WeatherPanelComponent }  from './components/weather-panel.component';
import { WeatherAboutComponent }  from './components/weather-about.component';
import { WeatherApiKeyComponent } from './components/weather-api-key.component';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		AppRoutingModule
 	],
	declarations: [
		AppComponent,
		WeatherSearchComponent,
		WeatherPanelComponent,
		WeatherAboutComponent,
		WeatherApiKeyComponent
	],
	providers: [
		WeatherService
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }
