import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoMainComponent } from './demo-main/demo-main.component';
import { DemoOnEnterOnLeaveComponent } from './demo-on-enter-on-leave/demo-on-enter-on-leave.component';
import { DemoDynamicParamsComponent } from './demo-dynamic-params/demo-dynamic-params.component';
import { ExpirementsComponent } from './expirements/expirements.component';

export const routes: Routes = [
  {
    path: '',
    component: DemoMainComponent
  },
  {
    path: 'enter-leave',
    component: DemoOnEnterOnLeaveComponent
  },
  {
    path: 'dynamic-params',
    component: DemoDynamicParamsComponent
  },
  {
    path: 'experiments',
    component: ExpirementsComponent
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

// NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
export const AppRoutingModule = RouterModule.forRoot(routes, {
  useHash: false
});
