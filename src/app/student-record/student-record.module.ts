import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRecordRoutingModule } from './student-record-routing.module';
import { StudentRecordComponent } from './student-record.component';


@NgModule({
  declarations: [StudentRecordComponent],
  imports: [
    CommonModule,
    StudentRecordRoutingModule
  ]
})
export class StudentRecordModule { }
