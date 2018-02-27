import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-vendor-policy',
  templateUrl: './vendor-policy.component.html',
  styleUrls: ['./vendor-policy.component.css']
})
export class VendorPolicyComponent implements OnInit {

  constructor(private userService: UserService) { }
  vendor_policy;

  ngOnInit() {
    // Get vendor_policy from dashboard
    this.userService.getVendorPolicy().subscribe(vp => {
      if (vp.success) {
        if (vp.msg.length > 0) {
          this.vendor_policy = vp.msg[0].data;
        }else {
          this.vendor_policy = 'Something went wrong. Please try again later.';
        }
      }else {
        this.vendor_policy = 'Something went wrong. Please try again later.';
      }
    });
  }

}
