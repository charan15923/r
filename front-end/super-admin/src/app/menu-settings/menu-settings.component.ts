import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-menu-settings',
  templateUrl: './menu-settings.component.html',
  styleUrls: ['./menu-settings.component.css']
})
export class MenuSettingsComponent implements OnInit {

  constructor(private adminService: AdminService) { }

  all_cats;
  sub_cats;
  selectedCat;
  e_main_cats;

  ngOnInit() {
    // Getting all categories
    this.adminService.getCategories().subscribe(res => {
      if (res.success) {
        this.all_cats = res.msg;
      } else {
        alert('Something went wrong getting categories');
      }
    });
    // Getting already existing main categories
    this.adminService.getMainCats().subscribe(mcats => {
      if (mcats.success) {
        this.e_main_cats = mcats.msg;
      } else {
        alert('somethign went wrong getting existing main categories');
      }
    });
  }
  catSelected(event) {
    this.selectedCat = event.target.value;
    // Get sub cats of the selected category
    this.adminService.getSubCategoriesOfCat(this.selectedCat).subscribe(subs => {
      if (subs.success) {
        this.sub_cats = subs.msg;
      } else {
        alert('something went wrong bringng the sub categories. Try again');
      }
    });
  }

}
