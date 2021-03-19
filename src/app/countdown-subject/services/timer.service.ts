import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  private startButtonCount$ = new BehaviorSubject<number>(0);
  private pauseButtonCount$ = new BehaviorSubject<number>(0);
  private timerStartValue$ = new BehaviorSubject<number>(0);
  private timerLapsOutput$ = new BehaviorSubject<string>('');

  constructor() { }

  public setStartButtonCountObserver(count: number) {
    this.startButtonCount$.next(count);
  }

  public getStartButtonCountObserver(): Observable<number> {
    return this.startButtonCount$.asObservable();
  }

  public setPauseButtonCountObserver(count: number) {
    this.pauseButtonCount$.next(count);
  }

  public getPauseButtonCountObserver(): Observable<number> {
    return this.pauseButtonCount$.asObservable();
  }

  public setTimerStartObserver(count: number) {
    this.timerStartValue$.next(count);
  }

  public getTimerStartObserver(): Observable<number> {
    return this.timerStartValue$.asObservable();
  }

  public setTimerLapsOutputObserver(value: string) {
    this.timerLapsOutput$.next(value);
  }

  public getTimerLapsOutputObserver(): Observable<string> {
    return this.timerLapsOutput$.asObservable();
  }
}
