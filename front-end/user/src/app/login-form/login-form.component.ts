import { Component, OnInit } from '@angular/core';

// Services
import { AuthService } from '../services/auth.service';
import { ValidateService } from '../services/validate.service';

const moment = require('moment');
declare var $: any;

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  signupName;
  signupEmail;
  signupMobile;
  signupPwd;
  loginMobile;
  loginPwd;

  constructor(private auth: AuthService, private validate: ValidateService) { }

  ngOnInit() {
    // Title of the page
  }
  loginSubmit() {
    if (this.validate.validateInput(this.loginMobile) && this.validate.validateInput(this.loginPwd)) {
      if (this.validate.validateMobile(this.loginMobile)) {
        const user = {
          mobile : this.loginMobile,
          password : this.loginPwd
        };
        // Check if mobile is registered with us
        this.auth.authenticateMobile(this.loginMobile).subscribe(res => {
          if (res.success) {
            // Mobile exists, validate user
            this.auth.authenticateUser(user).subscribe(user_status => {
              if (user_status.success) {
                // Log user in
                this.auth.storeUserData(user_status.token, user_status.user);
              }else {
                alert('Error occured');
                console.log(user_status.msg);
                // window.location.reload();
              }
            });
          }else {
            // Mobile not registered
            alert('Mobile not registered with us');
          }
        });
      }
    }

  }
  signupSubmit() {
    // Validate
    // tslint:disable-next-line:max-line-length
    if (this.validate.validateInput(this.signupName) && this.validate.validateInput(this.signupEmail) && this.validate.validateInput(this.signupMobile) && this.validate.validateInput(this.signupPwd)) {
      if (this.validate.validateEmail(this.signupEmail) && this.validate.validateMobile(this.signupMobile)) {
        const user = {
          name : this.signupName,
          email : this.signupEmail,
          mobile : this.signupMobile,
          password : this.signupPwd
        };
        this.auth.authenticateMobile(this.signupMobile).subscribe(m_status => {
          if (m_status.success) {
            // mobile exists
            alert('Mobile exists');
          }else {
            this.auth.authenticateEmail(this.signupEmail).subscribe(e_status => {
              if (e_status.success) {
                alert('Email exists');
              }else {
                  // mobile and email are not registered. Register the user
                  this.auth.registerUser(user).subscribe(res => {
                    if (res.success) {
                      // User is registered
                      console.log(res.msg);
                    }else {
                      // Something went wrong
                      console.log(res.msg);
                    }
                  });
              }
            });
          }
        });
      }else {
        alert('proper email and mobile numbers are required');
      }
    }else {
      alert('All inputs are required');
  }

  // Send use to register
  }
  showLoginForm() {
    $('.s-trig').removeClass('h-l-selected');
    $('.l-trig').addClass('h-l-selected');
    $('.login-form-db').css({'display': 'flex'});
    $('.s-form').css({'display': 'none'});
    $('.l-form').css({'display': 'flex'});
  }
  showSignupForm() {
    $('.l-trig').removeClass('h-l-selected');
    $('.s-trig').addClass('h-l-selected');
    $('.login-form-db').css({'display': 'flex'});
    $('.l-form').css({'display': 'none'});
    $('.s-form').css({'display': 'flex'});
  }
  dbClose() {
    $('.login-form-db').css({'display': 'none'});
  }

}
