import { Component, OnInit } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ValidateService } from '../services/validate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  lEmail;
  lPwd;
  constructor(private auth: AuthService, private validate: ValidateService, private router: Router) { }

  ngOnInit() {

    if (this.auth.loggedIn()) {
      // redirect to home
      this.router.navigate(['/home']);
    }
  }

  logAdmin() {
    if (this.validate.validateInput(this.lEmail) && this.validate.validateInput(this.lPwd)) {
      this.auth.authenticateEmail(this.lEmail).subscribe(status => {
        if (status.success) {
           const admin = {
             email: this.lEmail,
             password: this.lPwd
           };
          this.auth.authenticateUser(admin).subscribe(logStatus => {
            if (logStatus.success) {
              // Log user in
              alert('yes');
              this.auth.storeUserData(logStatus.token, logStatus.admin);
              this.router.navigate(['/home']);
            }else {
              alert('Wrong Password');
            }
          });
        }else {
          alert('email not registered');
        }
      });
    }else {
      alert('All inputs are required');
    }
  }

}
