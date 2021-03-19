import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountdownSubjectComponent } from './countdown-subject.component';

const routes: Routes = [{ path: '', component: CountdownSubjectComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountdownSubjectRoutingModule {}
