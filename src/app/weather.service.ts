import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiLink:string="https://smart-home-b486c-default-rtdb.firebaseio.com/";
  constructor(private http:HttpClient) { }

  lightSensor() {
    return this.http.get<boolean>(`${this.apiLink}light.json`)
  }

  temperatureSensor() {
    return this.http.get<number>(`${this.apiLink}Temperature.json`)
  }

  RainSensor() {
    return this.http.get<number>(`${this.apiLink}Rain Fall.json`)
  }

  Humidity() {
    return this.http.get<number>(`${this.apiLink}Humidity.json`)
  }
}


