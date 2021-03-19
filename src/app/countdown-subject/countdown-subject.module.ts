import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountdownSubjectRoutingModule } from './countdown-subject-routing.module';
import { CountdownSubjectComponent } from './countdown-subject.component';
import { TimerComponent } from './timer/timer.component';
import { TimerSettingsComponent } from './timer-settings/timer-settings.component';
import { TimerOutputsComponent } from './timer-outputs/timer-outputs.component';
import { TimerClickCounterComponent } from './timer-click-counter/timer-click-counter.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CountdownSubjectComponent, TimerComponent, TimerSettingsComponent, TimerOutputsComponent, TimerClickCounterComponent],
  imports: [
    CommonModule,
    CountdownSubjectRoutingModule,
    FormsModule
  ]
})
export class CountdownSubjectModule { }
