import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicDivOnscrollRoutingModule } from './dynamic-div-onscroll-routing.module';
import { DynamicDivOnscrollComponent } from './dynamic-div-onscroll.component';
import { DivComponent } from './div/div.component';


@NgModule({
  declarations: [DynamicDivOnscrollComponent, DivComponent],
  imports: [
    CommonModule,
    DynamicDivOnscrollRoutingModule
  ]
})
export class DynamicDivOnscrollModule { }
