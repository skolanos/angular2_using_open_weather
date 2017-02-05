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
	@Output() fiveDayForecastData: EventEmitter<any>;
	@Output() sixteenDayForecastData: EventEmitter<any>;
	@Output() currentUvData: EventEmitter<any>;

	constructor(private weatherService: WeatherService) {
		this.cityName = '';
		this.messages = [];
		this.currentWeatherData = new EventEmitter();
		this.fiveDayForecastData = new EventEmitter();
		this.sixteenDayForecastData = new EventEmitter();
		this.currentUvData = new EventEmitter();
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
		this.messages = [];
		if (true === true) {
			this.messages.push(JSON.stringify(error));
		}
		else {
			this.messages.push('Wystąpił błąd przy komunikacji z serwisem.');
		}
	}
	getWeatherForCity(): void {
		if (this.checkForm()) {
			let coord: any = {};
			this.weatherService.getCurrentWeatherData(this.cityName).subscribe((value: any) => {
				coord = { lat: value.coord.lat, lon: value.coord.lon};
				this.currentWeatherData.emit(value);
				this.weatherService.getFiveDayForecast(this.cityName).subscribe((value: any) => {
					this.fiveDayForecastData.emit(value);
					this.weatherService.getSixteenDayForecast(this.cityName, 16).subscribe((value: any) => {
						this.sixteenDayForecastData.emit(value);
						this.weatherService.getCurrentUvIndex(coord.lat, coord.lon).subscribe((value: any) => {
							this.currentUvData.emit(value);
						}, error => {
							if (error.status === 404) {
								// brak danych dla podanego obszaru, poszukiwanie na większym obszarze
								this.weatherService.getCurrentUvIndex(Math.floor(coord.lat), Math.floor(coord.lon)).subscribe((value: any) => {
									this.currentUvData.emit(value);
								}, error => {
									this.parseError(error);
								});
							}
							else {
								this.parseError(error);
							}
						});
					}, error => {
						this.parseError(error);
					});
				}, error => {
					this.parseError(error);
				});
			}, error => {
				this.parseError(error);
			});
		}
	}
}
