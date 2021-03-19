import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer-settings',
  templateUrl: './timer-settings.component.html',
  styleUrls: ['./timer-settings.component.css']
})
export class TimerSettingsComponent implements OnInit {


  ngOnInit(): void {
  }
  startButtonCounter: number = 0;
  pauseButtonCounter: number = 0;
  timerStopped: boolean = true;
  timeCounter: number = 10;
  message: string = '';
  lapsMassage: string = '';
  interval;

  constructor() { }

  StartPauseClick() {
    if (this.timerStopped) {
      //Start timer
      this.lapsMassage += `Started At ${new Date().toLocaleString()}<br/>`;
      this.startButtonCounter += 1;

      this.interval = setInterval(() => {
        if (+this.timeCounter > 0) {
          this.timeCounter--;
        }
      }, 1000);
      this.timerStopped = false;
    }
    else {
      //Pause timer
      this.lapsMassage += `Paused At ${new Date().toLocaleString()}<br/>`;
      let element = document.getElementById("message");
      element.innerHTML += `<span>Paused at ${this.timeCounter}</span><br/>`
      this.pauseButtonCounter++;
      clearInterval(this.interval);
      this.timerStopped = true;
    }
  }

  Reset() {
    this.timeCounter = 10;
    clearInterval(this.interval);
    this.timerStopped = true;
    this.pauseButtonCounter = 0;
    this.startButtonCounter = 0;
    document.getElementById("message").innerHTML = '';
    this.lapsMassage = '';
  }
}
