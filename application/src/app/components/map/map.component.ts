import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { GoogleMap, MapMarker } from '@angular/google-maps';
import { ICoordinate } from 'src/app/core/models/coordinate.models';

export interface IMarker {
  position: ICoordinate,
  label: string,
  title: string
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnChanges {

  @Input() public center: ICoordinate | undefined
  @Input() public zoom: number | undefined
  @Input() public markers: IMarker[] | undefined

  private readonly _mapOptions: google.maps.MapOptions = {
    fullscreenControl: false,
    rotateControl: false,
    keyboardShortcuts: false,
    streetViewControl: false,
    minZoom: 11
  }
  public get MapOptions(): google.maps.MapOptions { return this._mapOptions }

  private _position: google.maps.LatLngLiteral = {
    lat: 48.8566969,
    lng: 2.3514616
  }
  public get Position(): google.maps.LatLngLiteral { return this._position }

  private _defaultZoom: number = 13
  public get DefaultZoom(): number { return this._defaultZoom }

  private _markers: MapMarker[] | undefined
  public get Markers(): MapMarker[] { return this._markers ?? [] }

  public constructor() { }

  public ngOnInit(): void {
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.center && changes.center.currentValue) {
      const pos: ICoordinate = <ICoordinate>changes.center.currentValue
      this._position = { lat: pos.latitude, lng: pos.longitude }
    }

    if (changes.zoom && changes.zoom.currentValue != undefined) {
      this._defaultZoom = +changes.zoom.currentValue
    }

    if (changes.markers && changes.markers.currentValue) {
      const values: IMarker[] = changes.markers.currentValue
      this._markers = values.map(x => {
        return {
          position:
          {
            lat: x.position.latitude,
            lng: x.position.longitude
          },
          label: {
            text: x.label,
          },
          title: x.title
        } as any
      })
    }
  }

}
