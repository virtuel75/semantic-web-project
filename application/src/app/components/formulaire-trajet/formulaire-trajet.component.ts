import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ICity } from 'src/app/core/models/city.models';
import { ICoordinate } from 'src/app/core/models/coordinate.models';
import { ISelectionOption } from '../select/select.component';

@Component({
  selector: 'app-formulaire-trajet',
  templateUrl: './formulaire-trajet.component.html',
  styleUrls: ['./formulaire-trajet.component.scss']
})
export class FormulaireTrajetComponent implements OnInit {

  @Output() public cityChange: EventEmitter<ICoordinate> = new EventEmitter<ICoordinate>()

  private readonly _cities: ICity[] = [
    {
      code: 'paris', name: 'Paris', coordinates: {
        latitude: 48.8566969,
        longitude: 2.3514616
      }
    },
    {
      code: 'lyon', name: 'Lyon', coordinates: {
        latitude: 45.764043,
        longitude: 4.835659
      }
    }
  ]

  private _cityOptions: ISelectionOption[] | undefined
  public get CityOptions(): ISelectionOption[] { return this._cityOptions ?? [] }

  private _establishmentOptions: ISelectionOption[] | undefined
  public get EstablishmentOptions(): ISelectionOption[] { return this._establishmentOptions ?? [] }

  public constructor() {
    this._cityOptions = this._cities.map(x => {
      return { label: x.name, value: x.code }
    })
  }

  public ngOnInit(): void {
  }

  private getNearEstablishment = (coordinate: ICoordinate) => {

  }

  // events
  public onSelectCity = (value: string) => {
    this._establishmentOptions = undefined
    const city: ICity | undefined = this._cities.find(x => x.code == value)
    if (city) {
      this.cityChange.emit(city.coordinates)
      this.getNearEstablishment(city.coordinates)
    }
  }

  public onSelectEstablishments = (value: string) => {
    console.log(value)
  }

}
