import { Component } from '@angular/core';
import { ICoordinate } from './core/models/coordinate.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private _center: ICoordinate | undefined
  public get Center(): ICoordinate | undefined { return this._center }

  public onCityChange = (coordinate: ICoordinate) => {
    this._center = coordinate
  }
}
