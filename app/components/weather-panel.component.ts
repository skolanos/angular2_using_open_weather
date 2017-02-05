import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'weather-panel',
	templateUrl: 'weather-panel.component.html'
})
export class WeatherPanelComponent {
	private currentWeatherData: any;
	private fiveDayForecastData: any;
	private sixteenDayForecastData: any;
	private currentUvData: any;

	constructor() {
		this.currentWeatherData = undefined;
		this.fiveDayForecastData = undefined;
		this.sixteenDayForecastData = undefined;
		this.currentUvData = undefined;
	}
	handleCurrentWeatherData(value: any): void {
		this.currentWeatherData = value;
	}
	handleFiveDayForecastData(value: any): void {
		this.fiveDayForecastData = value;
	}
	handleSixteenDayForecastData(value: any): void {
		this.sixteenDayForecastData = value;
	}
	handleCurrentUvData(value: any): void {
		this.currentUvData = value;
	}
}
