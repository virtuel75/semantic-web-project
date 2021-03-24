import { Component } from '@angular/core';
import { IMarker } from './components/map/map.component';
import { IResult } from './components/resultats-item/resultats-item.component';
import { ICoordinate } from './core/models/coordinate.models';
import { IMeteo } from './core/models/meteo.models';
import { ISchool } from './core/models/school.models';
import { BikeService } from './core/services/bike.service';
import { MeteoService } from './core/services/meteo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private _center: ICoordinate | undefined
  public get Center(): ICoordinate | undefined { return this._center }

  private _zoom: number = 13
  public get Zoom(): number { return this._zoom }

  private _markers: IMarker[] | undefined
  public get Markers(): IMarker[] { return this._markers ?? [] }

  private _stations: IResult[] | undefined
  public get Stations(): IResult[] { return this._stations ?? [] }

  private _meteo: IMeteo | undefined
  public get Meteo(): IMeteo | undefined { return this._meteo }

  public constructor(
    private bikeService: BikeService,
    private meteoService: MeteoService
  ) { }

  public onCityChange = (coordinate: ICoordinate) => {
    this._markers = []
    this._zoom = 13
    this._center = coordinate
    this._meteo = undefined

    this.meteoService.getMeteo(coordinate)
      .then(meteo => {
        if (meteo) {
          this._meteo = meteo
        }
      })
  }

  public onSchoolChange = (school: ISchool) => {
    this._markers = []
    this._zoom = 17
    this._center = school.coordinate
    this._stations = []
    const schoolMarker: IMarker = { label: school.nom, position: school.coordinate, title: school.nom }

    this.bikeService.getBikes(school.coordinate)
      .then(stations => {
        if (stations) {
          this._stations = stations.map(x => {
            return {
              capacity: x.fields.capacity,
              distance: +x.fields.dist,
              name: x.fields.name,
              stationCode: x.fields.stationcode
            }
          })

          const stationMakers: IMarker[] = stations.map(station => {
            return {
              label: station.fields.name,
              position: {
                latitude: station.fields.coordonnees_geo[0],
                longitude: station.fields.coordonnees_geo[1],
              },
              title: station.fields.name
            }
          })

          this._markers = [schoolMarker, ...stationMakers]
        }
      })
  }
}
