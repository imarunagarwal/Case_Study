import { Component, OnInit } from '@angular/core';
import { TimerService } from '../services/timer.service';

@Component({
  selector: 'app-timer-outputs',
  templateUrl: './timer-outputs.component.html',
  styleUrls: ['./timer-outputs.component.css'],
})
export class TimerOutputsComponent implements OnInit {
  constructor(private timerService: TimerService) {}

  ngOnInit(): void {
    this.timerService.getTimerLapsOutputObserver().subscribe((value) => {
      document.getElementById('lapsOutput').innerHTML = value;
    });
  }
}
