import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';

const moment = require('moment');

@Component({
  selector: 'app-add-sub-categories',
  templateUrl: './add-sub-categories.component.html',
  styleUrls: ['./add-sub-categories.component.css']
})
export class AddSubCategoriesComponent implements OnInit {

  constructor(private adminService: AdminService) { }

  all_cats;
  subCat;
  selectedCat;
  placeholder = false;
  placeholder_subs;

  ngOnInit() {
    this.adminService.getCategories().subscribe(cats => {
      this.all_cats = cats.msg;
    });
  }
  catSelect(val) {
    this.selectedCat = val;
    this.displaySubCatsOfCat(this.selectedCat);
  }
  addSubCatClicked(val) {
    if (this.selectedCat !== null && this.selectedCat !== undefined) {
      if (this.subCat !== '' && this.subCat !== undefined && this.subCat !== null) {
        const obj = {
          cat_id: this.selectedCat,
          subName: this.subCat,
          created_date : moment().format('MMMM Do YYYY, h:mm:ss a')
        };
        this.adminService.AddSubCategory(obj).subscribe(sub => {
          if (sub.success) {
            this.subCat = '';
            this.displaySubCatsOfCat(this.selectedCat);
          }else {
            alert('error');
          }
        });
      } else {
        alert('Enter Sub Cat name');
      }
    }else {
      alert('Select Category');
    }
  }
  displaySubCatsOfCat(cat) {
    this.adminService.getSubCategoriesOfCat(cat).subscribe(subs => {
      this.placeholder_subs = subs.msg;
      this.placeholder = true;
    });
  }

}
