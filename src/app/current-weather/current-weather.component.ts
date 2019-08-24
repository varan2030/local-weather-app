import { Component, OnInit } from '@angular/core'
import { ICurrentWeather } from '../interfaces'

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {
  current: ICurrentWeather

  constructor() {
    this.current = {
      city: 'Washington D.C.',
      country: 'US',
      date: new Date,
      image: 'assets/img/sunny.png',
      temperature: 72,
      description: 'sunny'
    } as ICurrentWeather
  }

  ngOnInit() {
  }

}
