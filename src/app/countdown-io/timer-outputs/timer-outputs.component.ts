import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-timer-outputs',
  templateUrl: './timer-outputs.component.html',
  styleUrls: ['./timer-outputs.component.css']
})
export class TimerOutputsComponent implements OnChanges {

  constructor() { }
  @Input() lapsOutput: string;
  ngOnChanges(): void {
    document.getElementById("lapsOutput").innerHTML = this.lapsOutput;
  }
}
