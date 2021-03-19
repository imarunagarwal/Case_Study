import { Component, OnInit } from '@angular/core';
import { TimerService } from '../services/timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  timer: number = 0;
  constructor(private timerService: TimerService) { }

  ngOnInit(): void {
    this.timerService.getTimerStartObserver().subscribe(value => {
      this.timer = value;
    });
  }
}