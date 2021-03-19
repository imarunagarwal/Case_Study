import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TimerService } from '../services/timer.service';

@Component({
  selector: 'app-timer-outputs',
  templateUrl: './timer-outputs.component.html',
  styleUrls: ['./timer-outputs.component.css'],
})
export class TimerOutputsComponent implements OnInit, OnDestroy {
  private getTimerLapsOutputSubsription: Subscription;
  constructor(private timerService: TimerService) {}

  ngOnInit(): void {
    this.getTimerLapsOutputSubsription = this.timerService
      .getTimerLapsOutputObserver()
      .subscribe((value) => {
        document.getElementById('lapsOutput').innerHTML = value;
      });
  }

  ngOnDestroy(): void {
    this.getTimerLapsOutputSubsription.unsubscribe();
  }
}
