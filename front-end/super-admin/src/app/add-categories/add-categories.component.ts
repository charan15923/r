import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';

const moment = require('moment');

@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.component.html',
  styleUrls: ['./add-categories.component.css']
})
export class AddCategoriesComponent implements OnInit {

  constructor(private adminService: AdminService) { }

  catName;
  all_cats;

  ngOnInit() {
    this.displayCats();
  }

  displayCats() {
    this.adminService.getCategories().subscribe(res => {
      this.all_cats = res.msg;
    });
  }

  addCategoryClicked() {
    // alert('clicked');
    const cur_time = moment().format('MMMM Do YYYY, h:mm:ss a');
    if (this.catName !== undefined && this.catName !== null && this.catName !== '') {
      const obj = {
        name : this.catName,
        time: cur_time
      };
      this.adminService.AddCategory(obj).subscribe(res => {
        if (res.success) {
          this.displayCats();
          this.catName = '';
        }
      });
      // this.admi
    }else {
      alert('Empty Category name');
    }
  }

  catDeleteClicked(cat) {
    const obj = {id: cat};
    this.adminService.DeleteCategory(obj).subscribe(res => {
      console.log(res);
      if (res.success) {
        alert('deleted');
      }else {
        alert('Not deleted');
      }
    });
  }

}
