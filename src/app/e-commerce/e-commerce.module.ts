import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ECommerceRoutingModule } from './e-commerce-routing.module';
import { ECommerceComponent } from './e-commerce.component';
import { GridComponent } from './grid/grid.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [ECommerceComponent, GridComponent, ListComponent],
  imports: [CommonModule, ECommerceRoutingModule],
})
export class ECommerceModule {}
