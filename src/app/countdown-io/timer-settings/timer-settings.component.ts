import { Component } from '@angular/core';

@Component({
  selector: 'app-timer-settings',
  templateUrl: './timer-settings.component.html',
  styleUrls: ['./timer-settings.component.css'],
})
export class TimerSettingsComponent {
  startButtonCounter = 0;
  pauseButtonCounter = 0;
  timerStopped = true;
  timeCounter = 10;
  message = '';
  lapsMassage = '';
  interval;

  constructor() {}

  StartPauseClick(): void {
    if (this.timerStopped) {
      // Start timer
      this.lapsMassage += `Started At ${new Date().toLocaleString()}<br/>`;
      this.startButtonCounter += 1;

      this.interval = setInterval(() => {
        if (+this.timeCounter > 0) {
          this.timeCounter--;
        }
      }, 1000);
      this.timerStopped = false;
    } else {
      // Pause timer
      this.lapsMassage += `Paused At ${new Date().toLocaleString()}<br/>`;
      const element = document.getElementById('message');
      element.innerHTML += `<span>Paused at ${this.timeCounter}</span><br/>`;
      this.pauseButtonCounter++;
      clearInterval(this.interval);
      this.timerStopped = true;
    }
  }

  Reset(): void {
    this.timeCounter = 10;
    clearInterval(this.interval);
    this.timerStopped = true;
    this.pauseButtonCounter = 0;
    this.startButtonCounter = 0;
    document.getElementById('message').innerHTML = '';
    this.lapsMassage = '';
  }
}
