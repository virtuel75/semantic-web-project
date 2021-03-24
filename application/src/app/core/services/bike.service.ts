import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { IBikeResponse, IBikeStation } from '../models/bike.models';
import { ICoordinate } from '../models/coordinate.models';

export const BIKESTATION_BASE_URL = new InjectionToken<string>('API_BASE_URL')

@Injectable()
export class BikeService {

  private readonly _url: string

  public constructor(
    private http: HttpClient,
    @Optional() @Inject(BIKESTATION_BASE_URL) baseUrl?: string
  ) {
    this._url = baseUrl !== undefined && baseUrl !== null ? baseUrl : "https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-emplacement-des-stations"
  }

  public getBikes = (coordinate: ICoordinate) => {
    const lat: number = coordinate.latitude
    const lng: number = coordinate.longitude

    let url = this._url + '&q=&lang=fr&rows=10&geofilter.distance=' + lat + '%2C' + lng + '%2C1000'
    url = url.replace(/[?&]$/, "")

    let options: any = {
      headers: new HttpHeaders({
        "Accept": "application/json"
      })
    }

    return this.http.get<IBikeResponse>(url, options)
      .toPromise()
      .then((values: any) => {
        const reponse: IBikeResponse = values
        const stations: IBikeStation[] = reponse.records
        return stations
      }, () => {
        return null
      })
  }
}
