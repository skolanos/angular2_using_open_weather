import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { WeatherService } from '../services/weather-service';

@Component({
	moduleId: module.id,
	selector: 'weather-api-key',
	templateUrl: 'weather-api-key.component.html'
})
export class WeatherApiKeyComponent implements OnInit {
	private apiKey: string;

	constructor(private weatherService: WeatherService) {
		this.apiKey = '';
	}
	ngOnInit(): void {
		this.apiKey = this.weatherService.getApiKey();
	}
	setApiKey(): void {
		this.weatherService.setApiKey(this.apiKey);
	}
}
