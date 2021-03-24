import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ICoordinate } from 'src/app/core/models/coordinate.models';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnChanges {

  @Input() public center: ICoordinate | undefined

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

  public readonly _defaultZoom: number = 13
  public get DefaultZoom(): number { return this._defaultZoom }

  public constructor() { }

  public ngOnInit(): void {
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.center && changes.center.currentValue) {
      const pos: ICoordinate = <ICoordinate>changes.center.currentValue
      this._position = { lat: pos.latitude, lng: pos.longitude }
    }
  }

}
