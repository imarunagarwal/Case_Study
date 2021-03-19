import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownIoRoutingModule } from './countdown-io-routing.module';
import { TimerSettingsComponent } from './timer-settings/timer-settings.component';
import { FormsModule } from '@angular/forms';
import { TimerComponent } from './timer/timer.component';
import { TimerClickCounterComponent } from './timer-click-counter/timer-click-counter.component';
import { TimerOutputsComponent } from './timer-outputs/timer-outputs.component';

@NgModule({
  declarations: [TimerSettingsComponent, TimerComponent, TimerClickCounterComponent, TimerOutputsComponent],
  imports: [
    CommonModule,
    CountdownIoRoutingModule,
    FormsModule
  ]
})
export class CountdownIoModule { }
