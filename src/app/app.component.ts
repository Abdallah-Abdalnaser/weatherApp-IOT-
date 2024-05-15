import { Component, OnInit } from '@angular/core';
import { faSun, IconDefinition ,faSpinner } from '@fortawesome/free-solid-svg-icons';
import { WeatherService } from './weather.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:['./app.component.scss']
})
export class AppComponent {
  temperature:number=0;
  humidity:number=0;
  rainFall:number=0;
  light:boolean=true;

  constructor(private WeatherService:WeatherService) {
    setInterval(()=>{
      this.sensorRead()
    },1000)
  }


  sensorRead() {
    this.WeatherService.temperatureSensor().subscribe(
      (data)=> this.temperature = data
    )
    this.WeatherService.Humidity().subscribe(
      (data)=> this.humidity = data
    )
    this.WeatherService.RainSensor().subscribe(
      (data)=> this.rainFall = data
    )
    this.WeatherService.lightSensor().subscribe(
      (data)=> this.light = data
    )
  }

  checkLight() {
    if (this.light === true) {
      return 'Gold';
    } else {
      return '#ccc'
    }
  }
}
