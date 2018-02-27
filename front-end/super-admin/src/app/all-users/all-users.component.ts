import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  constructor(private adminService: AdminService) { }

  all_users;
  display_users;
  ngOnInit() {
    // Get all users
    this.adminService.getAllUsers().subscribe(res => {
      if (res.success) {
        this.all_users = res.msg;
        this.displayUsers(res.msg);
      }else {
        alert('Something went wrong');
      }
    });
  }

  displayUsers(users) {
    this.display_users = users;
  }

}
