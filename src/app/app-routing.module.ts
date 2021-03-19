import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  { path: 'image', loadChildren: () => import('./image/image.module').then(m => m.ImageModule) },
  { path: '', component:  LandingComponent},
  { path: 'e-commerce', loadChildren: () => import('./e-commerce/e-commerce.module').then(m => m.ECommerceModule) },
  { path: 'countdown-subject', loadChildren: () => import('./countdown-subject/countdown-subject.module').then(m => m.CountdownSubjectModule) },
  { path: 'countdown-io', loadChildren: () => import('./countdown-io/countdown-io.module').then(m => m.CountdownIoModule) },
  { path: 'dynamic-div-onscroll', loadChildren: () => import('./dynamic-div-onscroll/dynamic-div-onscroll.module').then(m => m.DynamicDivOnscrollModule) },
  { path: 'student-record', loadChildren: () => import('./student-record/student-record.module').then(m => m.StudentRecordModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
