import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { RouterModule, Router, Routes } from '@angular/router';

// Services
import { AuthService } from './services/auth.service';
import { ValidateService } from './services/validate.service';
import { AdminService } from './services/admin.service';
// AuthGuard
import { AuthGuard } from './auth.guard';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { AllBusinessesComponent } from './all-businesses/all-businesses.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { MenuSettingsComponent } from './menu-settings/menu-settings.component';
import { AddCategoriesComponent } from './add-categories/add-categories.component';
import { AddSubCategoriesComponent } from './add-sub-categories/add-sub-categories.component';
import { EditCategoriesComponent } from './edit-categories/edit-categories.component';
import { CmsComponent } from './cms/cms.component';
import { AllEmployeesComponent } from './all-employees/all-employees.component';
import { CallCenterEmployeesComponent } from './call-center-employees/call-center-employees.component';
import { MarketingEmployeesComponent } from './marketing-employees/marketing-employees.component';
import { AccountingEmployeesComponent } from './accounting-employees/accounting-employees.component';
import { SoftwareEmployeesComponent } from './software-employees/software-employees.component';
import { PromotersComponent } from './promoters/promoters.component';
import { TemporaryEmployeesComponent } from './temporary-employees/temporary-employees.component';
import { DeliveryBoysComponent } from './delivery-boys/delivery-boys.component';
import { DeliveryTrackingComponent } from './delivery-tracking/delivery-tracking.component';
import { HomeBannerImgComponent } from './home-banner-img/home-banner-img.component';
import { CatBannerImgComponent } from './cat-banner-img/cat-banner-img.component';
import { SubCatBannerImgComponent } from './sub-cat-banner-img/sub-cat-banner-img.component';
import { GlobalAdsComponent } from './global-ads/global-ads.component';
import { LocalAdsComponent } from './local-ads/local-ads.component';
import { UserOrdersComponent } from './user-orders/user-orders.component';
import { SearchTermsComponent } from './search-terms/search-terms.component';
import { VendorsComponent } from './vendors/vendors.component';

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
      path: 'vendors',
      component: VendorsComponent,
      canActivate: [AuthGuard]
  },
  {
      path: 'login',
      component: LoginComponent
  },
  {
      path: 'businesses',
      component: AllBusinessesComponent,
      canActivate: [AuthGuard]
  },
  {
      path: 'all-users',
      component: AllUsersComponent,
      canActivate: [AuthGuard]
  },
  {
      path: 'menu-settings',
      component: MenuSettingsComponent,
      canActivate: [AuthGuard]
  },
  {
      path: 'add-categories',
      component: AddCategoriesComponent,
      canActivate: [AuthGuard]
  },
  {
      path: 'add-sub-categories',
      component: AddSubCategoriesComponent,
      canActivate: [AuthGuard]
  },
  {
      path: 'edit-categories',
      component: EditCategoriesComponent,
      canActivate: [AuthGuard]
  },
  {
      path: 'cms',
      component: CmsComponent,
      canActivate: [AuthGuard]
  },
  {
      path: 'all-employees',
      component: AllEmployeesComponent,
      canActivate: [AuthGuard]
  },
  {
      path: 'call-center-employees',
      component: CallCenterEmployeesComponent,
      canActivate: [AuthGuard]
  },
  {
      path: 'marketing-employees',
      component: MarketingEmployeesComponent,
      canActivate: [AuthGuard]
  },
  {
      path: 'accounting-employees',
      component: AccountingEmployeesComponent,
      canActivate: [AuthGuard]
  },
  {
      path: 'software-employees',
      component: SoftwareEmployeesComponent,
      canActivate: [AuthGuard]
  },
  {
      path: 'temporary-employees',
      component: TemporaryEmployeesComponent,
      canActivate: [AuthGuard]
  },
  {
      path: 'delivery-boys',
      component: DeliveryBoysComponent,
      canActivate: [AuthGuard]
  },
  {
      path: 'delivery-tracking',
      component: DeliveryTrackingComponent,
      canActivate: [AuthGuard]
  },
  {
      path: 'home-banner-img',
      component: HomeBannerImgComponent,
      canActivate: [AuthGuard]
  },
  {
      path: 'cat-banner-img',
      component: CatBannerImgComponent,
      canActivate: [AuthGuard]
  },
  {
      path: 'sub-cat-banner-img',
      component: SubCatBannerImgComponent,
      canActivate: [AuthGuard]
  },
  {
      path: 'global-ads',
      component: GlobalAdsComponent,
      canActivate: [AuthGuard]
  },
  {
      path: 'local-ads',
      component: LocalAdsComponent,
      canActivate: [AuthGuard]
  },
  {
      path: 'orders',
      component: UserOrdersComponent,
      canActivate: [AuthGuard]
  },
  {
      path: 'search',
      component: SearchTermsComponent,
      canActivate: [AuthGuard]
  },
  {
      path: 'users',
      component: AllUsersComponent,
      canActivate: [AuthGuard]
  },
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    IndexComponent,
    LoginComponent,
    AllBusinessesComponent,
    AllUsersComponent,
    MenuSettingsComponent,
    AddCategoriesComponent,
    AddSubCategoriesComponent,
    EditCategoriesComponent,
    CmsComponent,
    AllEmployeesComponent,
    CallCenterEmployeesComponent,
    MarketingEmployeesComponent,
    AccountingEmployeesComponent,
    SoftwareEmployeesComponent,
    PromotersComponent,
    TemporaryEmployeesComponent,
    DeliveryBoysComponent,
    DeliveryTrackingComponent,
    HomeBannerImgComponent,
    CatBannerImgComponent,
    SubCatBannerImgComponent,
    GlobalAdsComponent,
    LocalAdsComponent,
    UserOrdersComponent,
    SearchTermsComponent,
    VendorsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ValidateService, AuthService, AdminService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
