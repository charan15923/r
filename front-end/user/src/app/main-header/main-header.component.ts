import { Component, OnInit } from '@angular/core';

// services
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';



declare var $: any;

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  constructor(private auth: AuthService, private userService: UserService) { }
  location;
  lat;
  long;
  user_current_address;

  ngOnInit() {
    this.getUserLocation();
  }
  showLoginForm() {
    $('.login-form-db').css({'display': 'flex'});
    $('.l-form').css({'display': 'flex'});
  }
  showSignupForm() {
    $('.login-form-db').css({'display': 'flex'});
    $('.s-form').css({'display': 'flex'});
  }
  getUserLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          this.location = position.coords;
          this.lat = position.coords.latitude;
          this.long = position.coords.longitude;
          const latLong = {
            lat: this.lat,
            long: this.long
          };
          localStorage.setItem('user_position', JSON.stringify(latLong));
          if (this.location === undefined || this.location === null) {
          } else {
            this.userService.getLocation(this.lat, this.long).subscribe(res => {
              if (res) {
                // this.user_current_address = res.results[0].formatted_address;
                localStorage.removeItem('user_current_address');
                localStorage.setItem('user_current_address', res.results[0].formatted_address);
              }
            });
          }
        });
      }
  }
}
