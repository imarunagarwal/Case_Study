import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ECommerceComponent } from './e-commerce.component';
import { GridComponent } from './grid/grid.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: 'Grid',
    component: ECommerceComponent,
    children: [{ path: '', component: GridComponent }],
  },
  {
    path: 'List',
    component: ECommerceComponent,
    children: [{ path: '', component: ListComponent }],
  },
  { path: '', redirectTo: '/e-commerce/Grid', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ECommerceRoutingModule {}
