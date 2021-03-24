import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

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

  public readonly _defaultZoom: number = 12
  public get DefaultZoom(): number { return this._defaultZoom }

  public constructor() { }

  public ngOnInit(): void {
  }

}
