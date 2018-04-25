import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {
  apiKey;
  url;

  constructor(public http: HttpClient) {
    this.apiKey = 'API_KEY_HERE';
    this.url = 'http://api.wunderground.com/api/' + this.apiKey + '/conditions/q'
  }

  getWeather(city, state) {
    let currentUrl = this.url + '/' + state + '/' + city + '.json';
    return this.http.get(currentUrl)
    .map(result => result);
  }

}
