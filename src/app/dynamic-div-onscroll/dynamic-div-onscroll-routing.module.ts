import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicDivOnscrollComponent } from './dynamic-div-onscroll.component';

const routes: Routes = [{ path: '', component: DynamicDivOnscrollComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DynamicDivOnscrollRoutingModule {}
