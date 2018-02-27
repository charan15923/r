import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-all-businesses',
  templateUrl: './all-businesses.component.html',
  styleUrls: ['./all-businesses.component.css']
})
export class AllBusinessesComponent implements OnInit {

  constructor(private adminService: AdminService) { }
  display_businesses;
  all_businesses;
  selected_b_type = 'all';
  selected_plan = 'all';

  ngOnInit() {
    this.adminService.getAllBusniesses().subscribe(buses => {
      if (buses.success) {
        this.all_businesses = buses.msg;
        this.displayBusinesses(buses.msg, this.selected_plan);
      }else {
        alert('Something went wrong');
      }
    });
  }
  businessFilterChanged (b_type) {
    this.selected_b_type = b_type;
    // this.selected_plan
    switch (b_type) {
      case 'all':
        this.displayBusinesses(this.all_businesses, this.selected_plan);
        break;
      case 'product':
        this.adminService.getBusniessByType(b_type).subscribe(buses => {
          if (buses.success) {
            this.displayBusinesses(buses.msg, this.selected_plan);
          }else {
            alert('Something went wrong');
          }
        });
        break;
        case 'service':
          this.adminService.getBusniessByType(b_type).subscribe(buses => {
            if (buses.success) {
              this.displayBusinesses(buses.msg, this.selected_plan);
            }else {
              alert('Something went wrong');
            }
          });
        break;
      default:
        break;
    }
  }
  planFilterChanged(plan) {
    // this.selected_b_type;
    this.selected_plan = plan;
    this.businessFilterChanged(this.selected_b_type);
  }

  displayBusinesses(buses, plan) {
    if (plan === 'all') {
      // All Cats
      this.display_businesses = buses;
    }else {
      const busses = [];
        // Free
        buses.forEach(b => {
          if (b.plan === this.selected_plan) {
            busses.push(b);
          }
        });
        this.display_businesses = busses;
    }
  }

}
