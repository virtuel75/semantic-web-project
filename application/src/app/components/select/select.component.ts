import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';

export interface ISelectionOption {
  label: string,
  value: string
}

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @Input() public label: string | undefined
  @Input() public options: ISelectionOption[] | undefined

  @Output() public select: EventEmitter<string> = new EventEmitter<string>()

  public constructor() { }

  public ngOnInit(): void {
  }

  public onSelect = (event: MatSelectChange) => {
    this.select.emit(event.value)
  }

}
