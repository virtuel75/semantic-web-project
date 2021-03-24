import { Component, Input, OnInit } from '@angular/core';
import { BikeService } from 'src/app/core/services/bike.service';
import { IResult } from '../resultats-item/resultats-item.component';

@Component({
  selector: 'app-resultats-container',
  templateUrl: './resultats-container.component.html',
  styleUrls: ['./resultats-container.component.scss']
})
export class ResultatsContainerComponent implements OnInit {

  @Input() public items: IResult[] | undefined

  public constructor() { }

  public ngOnInit(): void {
  }

}
