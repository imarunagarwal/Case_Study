import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements OnChanges {
  constructor() {}
  counter: number;
  @Input() timer: number;
  ngOnChanges(): void {
    this.counter = this.timer;
  }
}
