import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { IBikeResponse } from '../models/bike.models';

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

  public getBikes = () => {
    let url = this._url
    url = url.replace(/[?&]$/, "")

    let options: any = {
      headers: new HttpHeaders({
        "Accept": "application/json"
      })
    }

    return this.http.get<IBikeResponse>(url, options)
      .toPromise()
      .then((value) => {
        console.log(value)
      })
  }
}
