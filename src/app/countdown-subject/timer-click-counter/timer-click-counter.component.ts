import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TimerService } from '../services/timer.service';

@Component({
  selector: 'app-timer-click-counter',
  templateUrl: './timer-click-counter.component.html',
  styleUrls: ['./timer-click-counter.component.css'],
})
export class TimerClickCounterComponent implements OnInit, OnDestroy {
  start = 0;
  pause = 0;
  private getStartButtonCountSubscription: Subscription;
  private getPauseButtonCountSubscription: Subscription;
  constructor(private timerService: TimerService) {}

  ngOnInit(): void {
    this.getStartButtonCountSubscription = this.timerService
      .getStartButtonCountObserver()
      .subscribe((value) => {
        this.start = value;
      });

    this.getPauseButtonCountSubscription = this.timerService
      .getPauseButtonCountObserver()
      .subscribe((value) => {
        this.pause = value;
      });
  }

  ngOnDestroy(): void {
    this.getStartButtonCountSubscription.unsubscribe();
    this.getPauseButtonCountSubscription.unsubscribe();
  }
}
