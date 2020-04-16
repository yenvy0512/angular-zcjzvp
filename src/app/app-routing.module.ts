import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './backend/product/product.component';
import { AdminComponent } from './backend/admin/admin.component';
import {DashboardComponent } from './backend/dashboard/dashboard.component';
const routes: Routes = [ 
  {path: 'admin',component: AdminComponent,
children:[
  {path: '',redirectTo: 'dashboard',pathMatch: 'full'},
  {path: 'dashboard',component: DashboardComponent},
   {path: 'product',component: ProductComponent}
]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }