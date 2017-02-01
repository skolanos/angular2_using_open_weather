import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Headers }    from '@angular/http';
import { Response }   from '@angular/http';
import { URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {
	private apiKey: string;

	constructor(private http: Http) {
		this.apiKey = '';
	}
	getApiKey(): string {
		return this.apiKey;
	}
	setApiKey(apiKey: string): void {
		this.apiKey = apiKey;
	}
	getCurrentWeatherData(cityName: string): Observable<Response> {
		let params = new URLSearchParams();

		params.set('q', cityName);
		params.set('appid', this.apiKey);

		return this.http.get('http://api.openweathermap.org/data/2.5/weather', {
			headers: new Headers({ 'Accept': 'application/json' }),
			search: params
		}).map((response: Response) => response.json());
	}
}
