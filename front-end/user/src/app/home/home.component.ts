import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';
import { DatePipe } from '@angular/common';
declare var $: any;
const moment = require('moment');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private title: Title, private userService: UserService, private auth: AuthService, private datePipe: DatePipe) { }

  userId;
  main_cats;

  all_businesses = [];
  today;

  ngOnInit() {

    const date = new Date();
    this.today = this.datePipe.transform(date, 'EEEE').toLowerCase();
    if (this.auth.loggedIn()) {
      const raw_user = localStorage.getItem('user');
      const user = JSON.parse(raw_user);
      this.userId = user.id;
      this.userService.updateTotalSiteVisits().subscribe(res => {
        console.log(res);
      });
    }else {
      this.userService.updateTotalSiteVisits().subscribe(res => {
        console.log(res);
      });
    }
    // Get main menu from Admin
    this.userService.getMainCats().subscribe(res => {
      if (res.success) {
        this.main_cats = res.msg;
      }else {
        // alert('nope main cats');
      }
    });


    // Get all businesses
    this.userService.getAllBusinesses().subscribe(buses => {
      if (buses.success) {
        const busses = buses.msg;
        busses.forEach(element => {
          let status, category;
          this.userService.getBusinessStatus(element._id).subscribe(b_stat => {
            if (b_stat.success) {
              status = b_stat.msg;
              if (status.length === 0) {
                if (element.business.days[this.today]) {
                  // Today shop is open
                  // Check for time
                  const opening_time = element.business.timings[this.today].opening;
                  const closing_time = element.business.timings[this.today].closing;
                  const open = moment(opening_time, 'h:mma');
                  const close = moment(closing_time, 'h:mma');
                  const cur_time = moment(new Date());
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
              }
            }else {
              status = 'open';
              element.status = status;
            }
          });
          // Get category
          this.userService.getCatfromCatId(element.business.category).subscribe(cat => {
            if (cat.success) {
              console.log(cat.msg[0].name);
              category = cat.msg[0].name;
              element.cat = category;
            } else {
              console.log(cat.msg);
            }
          });
          this.all_businesses.push(element);
          console.log(this.all_businesses);
        });
      }else {
          // something went wrong
          alert('Something went wrong');
      }
    });

    $('.cat-tab-products').click(function(){
      $('.cat-tab-title').removeClass('selected-cat-tab');
      $('.cat-tab-products').addClass('selected-cat-tab');
      $('.cat-tab-core').hide();
      $('.products-tab').show();
    });
    $('.cat-tab-services').click(function(){
      $('.cat-tab-title').removeClass('selected-cat-tab');
      $('.cat-tab-services').addClass('selected-cat-tab');
      $('.cat-tab-core').hide();
      $('.services-tab').show();
    });
    $('.cat-tab-individuals').click(function(){
      $('.cat-tab-title').removeClass('selected-cat-tab');
      $('.cat-tab-individuals').addClass('selected-cat-tab');
      $('.cat-tab-core').hide();
      $('.individuals-tab').show();
    });
  }

}
