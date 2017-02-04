export class CurrentWeatherParams  {
	public rawData: any;
	public dataCalculation: any;
	public sunriseTime: any;
	public sunsetTime: any;

	constructor(value: any) {
		this.rawData = value;
		this.dataCalculation = new Date(value.dt * 1000);
		this.sunriseTime = new Date(value.sys.sunrise * 1000);
		this.sunsetTime = new Date(value.sys.sunset * 1000)
	}
}
