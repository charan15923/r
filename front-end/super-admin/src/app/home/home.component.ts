import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private adminService: AdminService) { }

  total_site_visits;
  total_registered_users;
  total_registered_vendors;
  total_businesses;

  ngOnInit() {
    // Getting website visits
    this.adminService.getTotalSiteVisits().subscribe(res => {
      console.log(res);
      if (res.success) {
        this.total_site_visits = res.msg[0].visits;
      }else {
        this.total_site_visits = undefined;
       }
    });
    // Getting total users
    this.adminService.GetTotalNumberOfUsers().subscribe(user_number => {
      if (user_number.success) {
        this.total_registered_users = user_number.msg;
      } else {
        this.total_registered_users = 0;
      }
    });
    // Getting total vendors
    this.adminService.GetTotalNumberOfVendors().subscribe(vendor_number => {
      if (vendor_number.success) {
        this.total_registered_vendors = vendor_number.msg;
      }else {
        this.total_registered_vendors = null;
      }
    });
    // Getting total businesses
    this.adminService.GetTotalNumberOfBusinesses().subscribe(bus_number => {
      if (bus_number.success) {
        this.total_businesses = bus_number.msg;
      }else {
        this.total_businesses = 0;
      }
    });
  }

}
