import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { VendorService } from '../services/vendor.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private vendorService: VendorService,
    private title: Title) { }

  business_id;
  business_name;
  business_status;
  vendor_id;

  ngOnInit() {

    // Get vendor details from localhost
    const vendor_obj = JSON.parse(localStorage.getItem('user'));
    this.vendor_id = vendor_obj.id;
    // this.vendor_name = vendor_obj.name;
    // this.vendor_email = vendor_obj.email;
    // this.vendor_mobile = vendor_obj.mobile;

    this.route.params.subscribe(params => {
      // alert(params['id']);
      this.business_id = params['id'];
      // Get business from id
      this.vendorService.getBusinessById(this.business_id).subscribe(bus => {
        if (bus.success) {
          console.log(bus.msg[0]);
          const b_obj = bus.msg[0];
          this.business_name = b_obj.business.name;
          this.title.setTitle(this.business_name);
        }else {
          // something went wrong
          console.log(bus);
        }
      });
    });
  }

}
