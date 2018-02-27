import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-edit-categories',
  templateUrl: './edit-categories.component.html',
  styleUrls: ['./edit-categories.component.css']
})
export class EditCategoriesComponent implements OnInit {

  constructor(private adminService: AdminService) { }

  display_cats;
  display_subs;
  selected_cat;
  input_cat;
  subs_exist = false;
  catIsSelected = false;
  subCatIsSelected = false;
  selected_cat_name;
  selected_sub_name;

  ngOnInit() {
    this.adminService.getCategories().subscribe(cats_temp => {
      if (cats_temp.success) {
        this.display_cats = cats_temp.msg;
        console.log(cats_temp.msg);
      }else {
        alert('Something went wrong');
      }
    });
  }

  catSelected(cat) {
    this.selected_cat = cat;
    this.catIsSelected = true;
    this.adminService.getSubCategoriesOfCat(cat).subscribe(subs => {
      if (subs.success) {
        if (subs.msg.length > 0 ) {
          this.subs_exist = true;
          this.display_subs = subs.msg;
        }else {
          this.subs_exist = false;
        }
      }else {
        this.subs_exist = false;
      }
    });
    this.display_cats.forEach(catt => {
      console.log(catt);
      if (catt._id === this.selected_cat) {
        this.selected_cat_name = catt.name;
      }
    });
  }
  changeNameofSelectedCat() {
    // this.input_cat;
    // this.selected_cat;
    alert(this.input_cat);
    const obj = {
      cat_id: this.selected_cat,
      name: this.input_cat
    };
    this.adminService.editCategory(obj).subscribe(edited => {
      console.log(edited);
      if (edited.success) {
        alert('success');
      }else {
        alert('failed');
      }
    });
  }
  changeNameofSelectedSubCat() {

  }
  subSelected(sub_id) {
    this.subCatIsSelected = true;
    this.display_subs.forEach(element => {
      if (element._id === sub_id) {
        alert('match');
         this.selected_sub_name = element.name;
      }
    });
  }

}
