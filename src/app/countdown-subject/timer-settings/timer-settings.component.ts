import { Component } from '@angular/core';
import { TimerService } from '../services/timer.service';

@Component({
  selector: 'app-timer-settings',
  templateUrl: './timer-settings.component.html',
  styleUrls: ['./timer-settings.component.css'],
})
export class TimerSettingsComponent {
  timerStopped = true;
  timeCounter = '10';
  message = '';
  interval;

  constructor(private timerService: TimerService) {}

  StartPauseClick(counter): void {
    let val = 0;
    this.timerService.setTimerStartObserver(+counter);
    let lapsOutput;
    this.timerService.getTimerLapsOutputObserver().subscribe((value) => {
      lapsOutput = value;
    });

    if (this.timerStopped) {
      // Start timer
      this.timerService.getStartButtonCountObserver().subscribe((value) => {
        val = value;
      });
      this.timerService.setTimerLapsOutputObserver(
        `${lapsOutput}Started At ${new Date()}<br/>`
      );
      this.timerService.setStartButtonCountObserver(val + 1);

      let timer = 0;
      this.interval = setInterval(() => {
        this.timerService
          .getTimerStartObserver()
          .subscribe((timerStartCounter) => {
            if (timerStartCounter > 0) {
              timer = timerStartCounter;
            }
          });
        this.timerService.setTimerStartObserver(timer - 1);
        this.timerService
          .getTimerStartObserver()
          .subscribe((timerStartCounter) => {
            this.timeCounter = `${timerStartCounter}`;
          });
      }, 1000);
      this.timerStopped = false;
    } else {
      // Pause timer
      let timeValue;
      this.timerService.getTimerStartObserver().subscribe((timer) => {
        timeValue = timer;
      });
      this.timerService.getTimerLapsOutputObserver().subscribe((value) => {
        lapsOutput = value;
      });
      this.timerService.setTimerLapsOutputObserver(
        `${lapsOutput}Paused At ${new Date()}<br/>`
      );

      const element = document.getElementById('message');
      element.innerHTML += `<span>Paused at ${timeValue}</span><br/>`;

      this.timerService.getPauseButtonCountObserver().subscribe((value) => {
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
