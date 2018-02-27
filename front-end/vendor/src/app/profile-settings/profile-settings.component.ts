import { Component, OnInit } from '@angular/core';
import { VendorService } from '../services/vendor.service';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.css']
})
export class ProfileSettingsComponent implements OnInit {

  constructor(private vendorService: VendorService) { }

  vendor_id;
  vendor_name;
  vendor_mobile;
  vendor_email;
  vendor_address;
  location;
  lat;
  long;
  ngOnInit() {
    const vendor_obj = JSON.parse(localStorage.getItem('user'));
    this.vendor_id = vendor_obj.id;
    // Get vendor details by Id
    this.vendorService.getVendorById(this.vendor_id).subscribe(res => {
      if (res.success) {
        console.log(res.msg[0]);
        this.vendor_name = res.msg[0].name;
        this.vendor_mobile = res.msg[0].mobile;
        this.vendor_email = res.msg[0].email;
      }else {
        alert('Something went wrong');
      }
    });
  }
  locateVendor() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.location = position.coords;
        this.lat = position.coords.latitude;
        this.long = position.coords.longitude;
        if (this.location === undefined || this.location === null) {
        } else {
          this.vendorService.getLocation(this.lat, this.long).subscribe(res => {
            console.log(res);
            if (res) {
              this.vendor_address = res.results[0].formatted_address;
            }
          });
        }
      });
    }
  }

}
