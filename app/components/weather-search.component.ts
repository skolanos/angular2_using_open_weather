import { Component }    from '@angular/core';
import { Output }       from '@angular/core';
import { EventEmitter } from '@angular/core';

import { WeatherService } from '../services/weather-service';

@Component({
	moduleId: module.id,
	selector: 'weather-search',
	templateUrl: 'weather-search.component.html'
})
export class WeatherSearchComponent {
	private cityName: string;
	private messages: string[];
	@Output() currentWeatherData: EventEmitter<any>;

	constructor(private weatherService: WeatherService) {
		this.cityName = '';
		this.messages = [];
		this.currentWeatherData = new EventEmitter();
	}
	private checkForm(): boolean {
		this.messages = [];

		if (this.weatherService.getApiKey() === '') {
			this.messages.push('Nie podano klucza pozwalającego na dostęp do API.');
			return false;
		}
		if (this.cityName === '') {
			this.messages.push('Nie podano miejscowości dla której mają zostać pobrane aktualne warunki pogodowe.');
			return false;
		}

		return true;
	}
	private parseError(error: any): void {
		let errorBody = JSON.parse(error._body);

		this.messages = [];
		if (true === true) {
			// oryginalne komunikaty błędów zwrócone przez REST
			this.messages.push(errorBody.cod + ': ' + errorBody.message);
		}
		else {
			this.messages.push('Wystąpił błąd przy komunikacji z serwisem.');
		}
	}
	getWeatherForCity(): void {
		if (this.checkForm()) {
			this.weatherService.getCurrentWeatherData(this.cityName).subscribe((value: any) => {
				this.currentWeatherData.emit(value);
			}, error => {
				this.parseError(error);
			});
		}
	}
}
