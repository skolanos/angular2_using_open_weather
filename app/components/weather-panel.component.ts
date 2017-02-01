import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'weather-panel',
	templateUrl: 'weather-panel.component.html'
})
export class WeatherPanelComponent {
	private currentWeatherData: any;

	constructor() {
		this.currentWeatherData = undefined;
	}
	handleCurrentWeatherData(value: any): void {
		this.currentWeatherData = value;
	}
}
