import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISchool, ISchoolJSON_LD } from '../models/school.models';

@Injectable()
export class CityService {

  public constructor(
    private http: HttpClient
  ) { }

  public getEstablishment = (city: 'paris' | 'lyon') => {
    const file_uri: string = '/assets/jsonld/' + city + '.json'
    return this.http.get(file_uri).toPromise()
      .then((data: any) => {
        const results = data.results
        const bindings: ISchoolJSON_LD[] = results.bindings
        const schools: ISchool[] = bindings.map(x => {
          return {
            coordinate: {
              latitude: +x.Latitude.value,
              longitude: +x.Longitude.value
            },
            adresse: x.adresse.value,
            region: x.Region.value,
            ville: x.Ville.value,
            nom: x.nom.value
          }
        })

        return schools
      }, () => {
        return null
      })
  }
}
