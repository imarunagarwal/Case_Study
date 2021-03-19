import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimerSettingsComponent } from './timer-settings/timer-settings.component';

const routes: Routes = [{ path: '', component: TimerSettingsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountdownIoRoutingModule {}
