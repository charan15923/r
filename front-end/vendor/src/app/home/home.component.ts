import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';
import { ValidateService } from '../services/validate.service';
import { AuthService } from '../services/auth.service';
import { VendorService } from '../services/vendor.service';
import { Router, CanActivate } from '@angular/router';

const moment = require('moment');
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  // tslint:disable-next-line:max-line-length
  constructor(private auth: AuthService, private vendorService: VendorService, private router: Router, private title: Title, private datePipe: DatePipe) { }

  vendor_id;
  vendor_name;
  vendor_email;
  vendor_mobile;
  vendor_businesses = [];
  business_number = 0;
  today;

  ngOnInit() {

    const date = new Date();

    this.today = this.datePipe.transform(date, 'EEEE').toLowerCase();

    this.title.setTitle('Vendor Home - Reatchall');
    // Get vendor details from localhost
    const vendor_obj = JSON.parse(localStorage.getItem('user'));
    this.vendor_id = vendor_obj.id;
    this.vendor_name = vendor_obj.name;
    this.vendor_email = vendor_obj.email;
    this.vendor_mobile = vendor_obj.mobile;
    // Get vendor businesses

    this.vendorService.getVendorBusinesses(this.vendor_id).subscribe(bus => {
      if (bus.success) {
        // add businesses
        this.vendor_businesses = bus.msg;
        this.vendor_businesses.forEach(element => {
          // element.business.days.forEach(day => {
          //   console.log(day);
          // });
          console.log(element.business.days['monday']);
          // Check of object exists
          this.vendorService.getBusinessStatus(element._id).subscribe(stat => {
            console.log(stat);
            if (stat.success) {
              // alert(stat.msg[0].status);
              element.status = stat.msg[0].status;
            }
          });
          if (element.business.days[this.today]) {
            // Today shop is open
            // Check for time
            const opening_time = element.business.timings[this.today].opening;
            const closing_time = element.business.timings[this.today].closing;
            const open = moment(opening_time, 'h:mma');
            const close = moment(closing_time, 'h:mma');
            const cur_time = moment(new Date());
            let status;
            if (cur_time.isAfter(open)) {
              if (cur_time.isBefore(close)) {
                status = 'open';
              } else {
                status = 'close';
              }
            } else {
              status = 'close';
            }
            element.status = status;
          }else {
            // closed
            element.status = 'close';
          }
        });
        this.business_number = this.vendor_businesses.length;
      }else {
        this.business_number = 0;
      }
    });


  }
  statClicked(b_id, status, target) {
   switch (status) {
     case 'open':
       $(target).addClass('selected-stat');
        //  Set business status open
        const obj = {
          b_id: b_id,
          status: status
        };
        this.vendorService.postBusinessStatus(obj).subscribe(posted => {
          if (posted.success) {
            // Posted successfully
            // this.vendorService
            this.postVendorBusinesses();
            return true;
          } else {
            // Something went wrong
            return false;
          }
        });

       break;
       case 'close':
        $(target).addClass('selected-stat');
        const cobj = {
          b_id: b_id,
          status: status
        };
        this.vendorService.postBusinessStatus(cobj).subscribe(posted => {
          if (posted.success) {
            // Posted successfully
            this.postVendorBusinesses();
            return true;
          } else {
            // Something went wrong
            return false;
          }
        });
       break;
     default:
       break;
   }
  }
  postVendorBusinesses() {
    this.vendorService.getVendorBusinesses(this.vendor_id).subscribe(bus => {
      if (bus.success) {
        // add businesses
        this.vendor_businesses = bus.msg;
        this.vendor_businesses.forEach(element => {
          // element.business.days.forEach(day => {
          //   console.log(day);
          // });
          console.log(element.business.days['monday']);
          // Check of object exists
          this.vendorService.getBusinessStatus(element._id).subscribe(stat => {
            console.log(stat);
            if (stat.success) {
              // alert(stat.msg[0].status);
              element.status = stat.msg[0].status;
            }
          });
          if (element.business.days[this.today]) {
            // Today shop is open
            // Check for time
            const opening_time = element.business.timings[this.today].opening;
            const closing_time = element.business.timings[this.today].closing;
            const open = moment(opening_time, 'h:mma');
            const close = moment(closing_time, 'h:mma');
            const cur_time = moment(new Date());
            let status;
            if (cur_time.isAfter(open)) {
              if (cur_time.isBefore(close)) {
                status = 'open';
              } else {
                status = 'close';
              }
            } else {
              status = 'close';
            }
            element.status = status;
          }else {
            // closed
            element.status = 'close';
          }
        });
        this.business_number = this.vendor_businesses.length;
      }else {
        this.business_number = 0;
      }
    });
  }
  goToBusinessDashboard(bid) {
      this.router.navigate(['/business-dashboard']);
  }
}
