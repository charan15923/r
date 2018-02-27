import { Component, OnInit } from '@angular/core';

import { ValidateService } from '../services/validate.service';
import { AuthService } from '../services/auth.service';
import { Router, CanActivate } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private auth: AuthService, private validate: ValidateService, private router: Router, private title: Title) { }

  sName;
  sEmail;
  sMobile;
  sPwd;
  lMobile;
  lPwd;

  ngOnInit() {
    this.title.setTitle('Vendor Login - Reatchall');
    if (this.auth.loggedIn()) {
      // redirect to home
      this.router.navigate(['/home']);
    }
  }
  createVendorProfile() {
    // tslint:disable-next-line:max-line-length
    if (this.validate.validateInput(this.sName) && this.validate.validateInput(this.sEmail) && this.validate.validateInput(this.sMobile) && this.validate.validateInput(this.sPwd)) {
      if (this.validate.validateEmail(this.sEmail) && this.validate.validateMobile(this.sMobile)) {
        // Check if email and mobile already exists
        this.auth.authenticateEmail(this.sEmail).subscribe(res => {
          if (res.success) {
            alert('Email exists');
          }else {
            this.auth.authenticateMobile(this.sMobile).subscribe(um_status => {
              if (um_status.success) {
                alert('Mobile exists');
              }else {
                const vendor = {
                  name: this.sName,
                  email: this.sEmail,
                  mobile : this.sMobile,
                  password : this.sPwd
                };
                // Register Vendor
                this.auth.registerUser(vendor).subscribe(reg_status => {
                  console.log(reg_status);
                  if (reg_status.success) {
                    // Log user in
                    this.lMobile = this.sMobile;
                    this.lPwd = this.sPwd;
                    this.vendorLogin();
                  }
                });
              }
            });
          }
        });
      }else {
        alert('Proper email and mobile are required');
      }
    }
  }
  vendorLogin() {
    if (this.validate.validateInput(this.lMobile) && this.validate.validateInput(this.lPwd)) {
      // Check if input is mobile
      if (this.validate.validateMobile(this.lMobile)) {
        // authenticate if mobile number exists
        this.auth.authenticateMobile(this.lMobile).subscribe(res => {
          if (res.success) {
            // Mobile exists authenticate user
            const user = {
              mobile: this.lMobile,
              password: this.lPwd
            };
            this.auth.authenticateUser(user).subscribe(user_status => {
              if (user_status.success) {
                // Log user in
                this.auth.storeUserData(user_status.token, user_status.vendor);
                this.router.navigate(['/home']);
              }else {
                alert('error');
                console.log(user_status);
              }
            });
          }
        });
      }else {
        alert('proper mobile number is required');
      }
    }
  }
}
