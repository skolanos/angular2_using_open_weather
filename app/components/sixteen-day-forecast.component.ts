import { Component } from '@angular/core';
import { Input } from '@angular/core'

@Component({
	moduleId: module.id,
	selector: 'sixteen-day-forecast',
	templateUrl: 'sixteen-day-forecast.component.html'
})
export class SixteenDayForecastComponent {
	@Input() data: any;
}
