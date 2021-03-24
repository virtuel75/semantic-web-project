import { Component, Input, OnInit } from '@angular/core';
import { IMeteo } from 'src/app/core/models/meteo.models';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.scss']
})
export class MeteoComponent implements OnInit {

  @Input() public meteo: IMeteo | undefined

  public constructor() { }

  public ngOnInit(): void {
  }

}
