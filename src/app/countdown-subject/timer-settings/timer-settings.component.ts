import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TimerService } from '../services/timer.service';

@Component({
  selector: 'app-timer-settings',
  templateUrl: './timer-settings.component.html',
  styleUrls: ['./timer-settings.component.css'],
})
export class TimerSettingsComponent implements OnDestroy {
  timerStopped = true;
  timeCounter = '10';
  message = '';
  interval;
  private getTimerLapsOutputSubscription: Subscription;
  private getStartButtonCountSubscription: Subscription;
  private getTimerStartSubscription: Subscription;
  private getPauseButtonCountSubscription: Subscription;

  constructor(private timerService: TimerService) {}

  ngOnDestroy(): void {
    this.getTimerLapsOutputSubscription?.unsubscribe();
    this.getStartButtonCountSubscription?.unsubscribe();
    this.getTimerStartSubscription?.unsubscribe();
    this.getPauseButtonCountSubscription?.unsubscribe();
  }

  StartPauseClick(counter): void {
    let val = 0;
    this.timerService.setTimerStartObserver(+counter);
    let lapsOutput;
    this.getTimerLapsOutputSubscription = this.timerService
      .getTimerLapsOutputObserver()
      .subscribe((value) => {
        lapsOutput = value;
      });

    if (this.timerStopped) {
      // Start timer
      this.getStartButtonCountSubscription = this.timerService
        .getStartButtonCountObserver()
        .subscribe((value) => {
          val = value;
        });
      this.timerService.setTimerLapsOutputObserver(
        `${lapsOutput}Started At ${new Date().toLocaleString()}<br/>`
      );
      this.timerService.setStartButtonCountObserver(val + 1);

      let timer = 0;
      this.interval = setInterval(() => {
        this.getTimerStartSubscription = this.timerService
          .getTimerStartObserver()
          .subscribe((timerStartCounter) => {
            if (timerStartCounter > 0) {
              timer = timerStartCounter;
            }
          });
        this.timerService.setTimerStartObserver(timer - 1);
        this.getTimerStartSubscription = this.timerService
          .getTimerStartObserver()
          .subscribe((timerStartCounter) => {
            this.timeCounter = `${timerStartCounter}`;
          });
      }, 1000);
      this.timerStopped = false;
    } else {
      // Pause timer
      let timeValue;
      this.getTimerStartSubscription = this.timerService
        .getTimerStartObserver()
        .subscribe((timer) => {
          timeValue = timer;
        });
      this.getTimerLapsOutputSubscription = this.timerService
        .getTimerLapsOutputObserver()
        .subscribe((value) => {
          lapsOutput = value;
        });
      this.timerService.setTimerLapsOutputObserver(
        `${lapsOutput}Paused At ${new Date()}<br/>`
      );

      const element = document.getElementById('message');
      element.innerHTML += `<span>Paused at ${timeValue}</span><br/>`;

      this.getPauseButtonCountSubscription = this.timerService
        .getPauseButtonCountObserver()
        .subscribe((value) => {
          val = value;
        });

      this.timerService.setPauseButtonCountObserver(val + 1);

      clearInterval(this.interval);
      this.timerStopped = true;
    }
  }

  Reset(): void {
    this.timeCounter = '10';
    clearInterval(this.interval);
    this.timerService.setTimerStartObserver(+this.timeCounter);
    this.timerService.setPauseButtonCountObserver(0);
    this.timerService.setStartButtonCountObserver(0);
    this.timerStopped = true;
    document.getElementById('message').innerHTML = '';
    this.timerService.setTimerLapsOutputObserver('');
  }
}
