import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.css']
})
export class VendorsComponent implements OnInit {

  constructor(private adminService: AdminService) { }
  all_vendors;
  display_vendors;
  cats;
  selected_cat;
  p_subs;
  ngOnInit() {

    // Get all vendors
    this.adminService.getAllVendors().subscribe(res => {
      this.all_vendors = res.msg;
      this.displayVendors(this.all_vendors);
    });
    // Get all categories
    this.adminService.getCategories().subscribe(cats_temp => {
      if (cats_temp.success) {
        this.cats = cats_temp.msg;
        console.log(cats_temp.msg);
      }else {
        alert('Something went wrong');
      }
    });

  }

  catSelected(val) {
    this.selected_cat = val;
    this.displaySubCatsOfCat(this.selected_cat);
  }

  displaySubCatsOfCat(cat) {
    this.adminService.getSubCategoriesOfCat(cat).subscribe(subs => {
      this.p_subs = subs.msg;
    });
  }
  subCatSelected(sub_id) {
  //  Get vendors that belong to the sub category
    this.adminService.getVendorOfSubCategory(sub_id).subscribe(subs => {
      subs.msg.forEach(element => {
        console.log(element.vendor_id);
        this.adminService.getVendorById(element.vendor_id).subscribe(ven => {
          if (ven.success) {
            this.displayVendors(ven.msg);
          }else {
            alert('Something went wrong');
          }
        });
      });
    });
  }

  displayVendors(vendors: any) {
    this.display_vendors = vendors;
  }

}
