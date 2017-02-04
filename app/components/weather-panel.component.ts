import { Component } from '@angular/core';

import { CurrentWeatherParams } from '../types/current-weather-params';

@Component({
	moduleId: module.id,
	selector: 'weather-panel',
	templateUrl: 'weather-panel.component.html'
})
export class WeatherPanelComponent {
	private currentWeather: CurrentWeatherParams;
	private fiveDayForecastData: any;

	constructor() {
		this.currentWeather = undefined;
		this.fiveDayForecastData = undefined;
	}
	handleCurrentWeatherData(value: any): void {
		this.currentWeather = new CurrentWeatherParams(value);
	}
	handleFiveDayForecastData(value: any): void {
		this.fiveDayForecastData = {
			rawData: value
		};
	}
}
