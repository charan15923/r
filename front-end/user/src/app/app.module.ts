import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { RouterModule, Router, Routes } from '@angular/router';
import { DatePipe, LowerCasePipe } from '@angular/common';
// Imported
// Services
import { AuthService } from './services/auth.service';
import { ValidateService } from './services/validate.service';
// AuthGuard
import { AuthGuard } from './auth.guard';
// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { CareersComponent } from './careers/careers.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CategoriesComponent } from './categories/categories.component';
import { BusinessComponent } from './business/business.component';
import { NonCommercialSellComponent } from './non-commercial-sell/non-commercial-sell.component';
import { CategoryComponent } from './category/category.component';
import { TermsComponent } from './terms/terms.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { VendorPolicyComponent } from './vendor-policy/vendor-policy.component';
import { UserService } from './services/user.service';
import { SettingsComponent } from './settings/settings.component';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { MyAddressComponent } from './my-address/my-address.component';
import { MyRatingsComponent } from './my-ratings/my-ratings.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { MyVisitsComponent } from './my-visits/my-visits.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';


const appRoutes: Routes = [
  {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
  },
  {
      path: 'home',
      component: HomeComponent
  },
  {
      path: 'how-it-works',
      component: HowItWorksComponent
  },
  {
      path: 'contact-us',
      component: ContactUsComponent
  },
  {
      path: 'about',
      component: AboutComponent
  },
  {
      path: 'categories',
      component: CategoriesComponent
  },
  {
      path: 'careers',
      component: CareersComponent
  },
  {
      path: 'business/:b_id',
      component: BusinessComponent
  },
  {
      path: 'category',
      component: CategoryComponent
  },
  {
      path: 'sub-category',
      component: SubCategoryComponent
  },
  {
      path: 'terms',
      component: TermsComponent
  },
  {
      path: 'privacy-policy',
      component: PrivacyComponent
  },
  {
      path: 'vendor-policy',
      component: VendorPolicyComponent
  },
  {
      path: 'notifications',
      component: NotificationsComponent
  },
  {
      path: 'search-result',
      component: SearchResultsComponent
  },
  {
      path: 'settings',
      component: SettingsComponent,
      canActivate: [AuthGuard],
      children: [
        {
            path: '',
            redirectTo: 'profile',
            pathMatch: 'full',
        },
        {
            path: 'profile',
            component: ProfileSettingsComponent,
        },
        {
            path: 'change-password',
            component: ChangePasswordComponent,
        },
        {
            path: 'my-orders',
            component: MyOrdersComponent,
        },
        {
            path: 'my-ratings',
            component: MyRatingsComponent,
        },
        {
            path: 'my-visits',
            component: MyVisitsComponent,
        },
        {
            path: 'my-address',
            component: MyAddressComponent,
        },
        {
            path: 'feedback',
            component: FeedbackComponent,
        },
    ]
  },
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainHeaderComponent,
    SubHeaderComponent,
    LoginFormComponent,
    MainFooterComponent,
    HowItWorksComponent,
    CareersComponent,
    AboutComponent,
    ContactUsComponent,
    CategoriesComponent,
    BusinessComponent,
    NonCommercialSellComponent,
    CategoryComponent,
    TermsComponent,
    PrivacyComponent,
    VendorPolicyComponent,
    SettingsComponent,
    ProfileSettingsComponent,
    ChangePasswordComponent,
    MyOrdersComponent,
    MyAddressComponent,
    MyRatingsComponent,
    FeedbackComponent,
    MyVisitsComponent,
    NotificationsComponent,
    SearchResultsComponent,
    SubCategoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [AuthService, ValidateService, UserService, AuthGuard, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
