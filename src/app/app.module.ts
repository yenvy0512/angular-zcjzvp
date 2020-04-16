import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProductComponent } from './backend/product.component';
import { AdminComponent } from './backend/admin.component';
import {DashboardComponent } from './backend/dashboard.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ProductComponent, AdminComponent,DashboardComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
