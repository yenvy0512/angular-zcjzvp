import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './product.service';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProductComponent } from './backend/product/product.component';
import { AdminComponent } from './backend/admin/admin.component';
import {DashboardComponent } from './backend/dashboard/dashboard.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, ProductComponent, AdminComponent,DashboardComponent ],
  bootstrap:    [ AppComponent ],
    providers: [ProductService]
})
export class AppModule { }
