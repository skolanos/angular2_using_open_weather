import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'five-day-forecast',
	templateUrl: 'five-day-forecast.component.html'
})
export class FiveDayForecastComponent {
	@Input() data: any;
}
