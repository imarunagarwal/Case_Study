import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TimerService } from '../services/timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements OnInit, OnDestroy {
  timer = 0;
  private getTimerStartObserverSubscription: Subscription;
  constructor(private timerService: TimerService) {}

  ngOnInit(): void {
    this.getTimerStartObserverSubscription = this.timerService
      .getTimerStartObserver()
      .subscribe((value) => {
        this.timer = value;
      });
  }

  ngOnDestroy(): void {
    this.getTimerStartObserverSubscription.unsubscribe();
  }
}
