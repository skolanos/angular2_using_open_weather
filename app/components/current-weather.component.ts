import { Component } from '@angular/core';
import { Input }     from '@angular/core';

import { CurrentWeatherParams } from '../types/current-weather-params';

@Component({
	moduleId: module.id,
	selector: 'current-weather',
	templateUrl: 'current-weather.component.html'
})
export class CurrentWeatherComponent {
	@Input() data: CurrentWeatherParams;
}
