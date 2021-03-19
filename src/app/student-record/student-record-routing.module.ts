import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentRecordComponent } from './student-record.component';

const routes: Routes = [{ path: '', component: StudentRecordComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentRecordRoutingModule {}
