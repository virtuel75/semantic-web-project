import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICoordinate } from '../models/coordinate.models';
import { IMeteo, IMeteoResponse } from '../models/meteo.models';

@Injectable()
export class MeteoService {

  private readonly kelvin_value = 273

  public constructor(
    private http: HttpClient
  ) { }

  public getMeteo = (coordinate: ICoordinate) => {
    const url: string = 'https://api.openweathermap.org/data/2.5/weather?lat=' + coordinate.latitude + '&lon=' + coordinate.longitude + '&appid=' + '3d26c7ce070346ca5c4e7d205d3f55e4'

    let options: any = {
      headers: new HttpHeaders({
        "Accept": "application/json"
      })
    }

    return this.http.get(url, options)
      .toPromise()
      .then((value: any) => {
        const response: IMeteoResponse = value
        const meteo: IMeteo = {
          description: response.weather[0]?.description,
          feels_like: Math.round(response.main.feels_like - this.kelvin_value),
          humidity: response.main.humidity,
          main: response.weather[0]?.main,
          pressure: response.main.pressure,
          temp: Math.round(response.main.temp - this.kelvin_value),
          temp_max: Math.round(response.main.temp_max - this.kelvin_value),
          temp_min: Math.round(response.main.temp_min - this.kelvin_value)
        }
        return meteo
      }, () => {
        return null
      })

  }
}
