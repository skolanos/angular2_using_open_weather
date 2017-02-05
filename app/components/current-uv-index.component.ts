import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'current-uv-index',
	templateUrl: 'current-uv-index.component.html'
})
export class CurrentUvIndexComponent {
	@Input() data: any;
}
