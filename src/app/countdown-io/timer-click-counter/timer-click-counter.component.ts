import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-timer-click-counter',
  templateUrl: './timer-click-counter.component.html',
  styleUrls: ['./timer-click-counter.component.css']
})
export class TimerClickCounterComponent implements OnChanges {

  constructor() { }
  start: number = 0;
  pause: number = 0;
  @Input() startButtonCount: number;
  @Input() pauseButtonCount: number;
  ngOnChanges(): void {
    this.start = this.startButtonCount;
    this.pause = this.pauseButtonCount;
  }

}
