import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { RouterModule, Router, Routes } from '@angular/router';
import { DatePipe, LowerCasePipe } from '@angular/common';

// Services
import { AuthService } from './services/auth.service';
import { ValidateService } from './services/validate.service';
import { VendorService } from './services/vendor.service';
// AuthGuard
import { AuthGuard } from './auth.guard';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { AddBusinessComponent } from './add-business/add-business.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { AddProductsToBusinessComponent } from './add-products-to-business/add-products-to-business.component';
import { AddServicesToBusinessComponent } from './add-services-to-business/add-services-to-business.component';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AllOrdersComponent } from './all-orders/all-orders.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { BusinessDashboardComponent } from './business-dashboard/business-dashboard.component';
import { BusinessSettingsComponent } from './business-settings/business-settings.component';
import { BusinessNotificationsComponent } from './business-notifications/business-notifications.component';
import { BusinessOrdersComponent } from './business-orders/business-orders.component';
import { AddProductsComponent } from './add-products/add-products.component';

const appRoutes: Routes = [
  {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
  },
  {
      path: 'home',
      component: HomeComponent,
      canActivate: [AuthGuard]
  },
  {
      path: 'login',
      component: LoginPageComponent
  },
  {
      path: 'add-business',
      component: AddBusinessComponent
  },
  {
      path: 'add-products/:business_id',
      component: AddProductsToBusinessComponent
  },
  {
      path: 'add-services/:business_id',
      component: AddServicesToBusinessComponent
  },
  {
      path: 'profile-settings',
      component: ProfileSettingsComponent
  },
  {
      path: 'change-password',
      component: ChangePasswordComponent
  },
  {
      path: 'orders',
      component: AllOrdersComponent
  },
  {
      path: 'notifications',
      component: NotificationsComponent
  },
  {
      path: 'business-dashboard/:id',
      component: BusinessDashboardComponent,
  },
  {
      path: 'business-settings/:id',
      component: BusinessSettingsComponent
  },
  {
      path: 'business-notifications/:id',
      component: BusinessNotificationsComponent
  },
  {
      path: 'business-orders/:id',
      component: BusinessOrdersComponent
  },
  {
      path: 'business-add-products/:id',
      component: AddProductsComponent
  },
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginPageComponent,
    MainHeaderComponent,
    AddBusinessComponent,
    MainFooterComponent,
    AddProductsToBusinessComponent,
    AddServicesToBusinessComponent,
    ProfileSettingsComponent,
    ChangePasswordComponent,
    AllOrdersComponent,
    NotificationsComponent,
    BusinessDashboardComponent,
    BusinessSettingsComponent,
    BusinessNotificationsComponent,
    BusinessOrdersComponent,
    AddProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService, ValidateService, AuthGuard, VendorService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
