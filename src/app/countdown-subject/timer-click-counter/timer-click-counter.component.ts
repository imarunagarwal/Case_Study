import { Component, OnInit } from '@angular/core';
import { TimerService } from '../services/timer.service';

@Component({
  selector: 'app-timer-click-counter',
  templateUrl: './timer-click-counter.component.html',
  styleUrls: ['./timer-click-counter.component.css'],
})
export class TimerClickCounterComponent implements OnInit {
  start = 0;
  pause = 0;
  constructor(private timerService: TimerService) {}

  ngOnInit(): void {
    this.timerService.getStartButtonCountObserver().subscribe((value) => {
      this.start = value;
    });

    this.timerService.getPauseButtonCountObserver().subscribe((value) => {
      this.pause = value;
    });
  }
}
