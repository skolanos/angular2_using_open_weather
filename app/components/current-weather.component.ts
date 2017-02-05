import { Component } from '@angular/core';
import { Input }     from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'current-weather',
	templateUrl: 'current-weather.component.html'
})
export class CurrentWeatherComponent {
	@Input() data: any;
}
