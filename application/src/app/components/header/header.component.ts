import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private readonly _appTitle: string = 'Studyride'
  public get AppTitle(): string { return this._appTitle }

  public constructor() { }

  public ngOnInit(): void {
  }

}
