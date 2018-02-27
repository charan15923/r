import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { LocalAdComponent } from './local-ad/local-ad.component';
import { ViewVendorsComponent } from './view-vendors/view-vendors.component';
import { EmployeeManagementComponent } from './employee-management/employee-management.component';
import { BusinessManagementComponent } from './business-management/business-management.component';
import { VendorManagementComponent } from './vendor-management/vendor-management.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    LocalAdComponent,
    ViewVendorsComponent,
    EmployeeManagementComponent,
    BusinessManagementComponent,
    VendorManagementComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
