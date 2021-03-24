import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ICity } from 'src/app/core/models/city.models';
import { ICoordinate } from 'src/app/core/models/coordinate.models';
import { ISchool } from 'src/app/core/models/school.models';
import { CityService } from 'src/app/core/services/city.service';
import { ISelectionOption } from '../select/select.component';

@Component({
  selector: 'app-formulaire-trajet',
  templateUrl: './formulaire-trajet.component.html',
  styleUrls: ['./formulaire-trajet.component.scss']
})
export class FormulaireTrajetComponent implements OnInit {

  @Output() public cityChange: EventEmitter<ICoordinate> = new EventEmitter<ICoordinate>()
  @Output() public schoolChange: EventEmitter<ISchool> = new EventEmitter<ISchool>()

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
  private _schools: ISchool[] = []

  private _cityOptions: ISelectionOption[] | undefined
  public get CityOptions(): ISelectionOption[] { return this._cityOptions ?? [] }

  private _schoolOptions: ISelectionOption[] | undefined
  public get SchoolOptions(): ISelectionOption[] { return this._schoolOptions ?? [] }

  public constructor(
    private cityService: CityService
  ) {
    this._cityOptions = this._cities.map(x => {
      return { label: x.name, value: x.code }
    })
  }

  public ngOnInit(): void {
  }

  private getNearEstablishment = (city: string) => {
    this.cityService.getEstablishment(city as 'paris' | 'lyon')
      .then((schools: ISchool[] | null) => {
        if (schools) {
          this._schools = schools
          this._schoolOptions = schools.map(x => {
            return { label: x.nom, value: x.nom }
          })
        }
      })
  }

  // events
  public onSelectCity = (value: string) => {
    this._schoolOptions = undefined
    this._schools = []
    const city: ICity | undefined = this._cities.find(x => x.code == value)
    if (city) {
      this.cityChange.emit(city.coordinates)
      this.getNearEstablishment(city.code)
    }
  }

  public onSelectEstablishments = (value: string) => {
    const school: ISchool | undefined = this._schools.find(x => x.nom == value)
    if (school) {
      this.schoolChange.emit(school)
    }
  }

}
