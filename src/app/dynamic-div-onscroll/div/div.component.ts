import { Component } from '@angular/core';

@Component({
  selector: 'app-div',
  templateUrl: './div.component.html',
  styleUrls: ['./div.component.css'],
})
export class DivComponent {
  constructor() {}

  public index: number;

  buttonClicked(): void {
    alert(`Button ${this.index} Clicked`);
  }
}
