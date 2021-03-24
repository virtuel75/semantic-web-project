import { Component, Input, OnInit } from '@angular/core';

export interface IResult {
  name: string,
  distance: number,
  stationCode: string,
  capacity: number
}

@Component({
  selector: 'app-resultats-item',
  templateUrl: './resultats-item.component.html',
  styleUrls: ['./resultats-item.component.scss']
})
export class ResultatsItemComponent implements OnInit {

  @Input() public item!: IResult

  public distance: number = 0

  public constructor() { }

  public ngOnInit(): void {
    this.distance = Math.round(this.item.distance)
  }

}
