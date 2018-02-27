import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { Title } from '@angular/platform-browser';
declare var $: any;
const moment = require('moment');

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private userService: UserService, private title: Title) { }

  business_id;
  business_name;
  custom_order_file;
  user_id;

  ngOnInit() {

    const raw_user = localStorage.getItem('user');
    const user = JSON.parse(raw_user);
    this.user_id = user.id;

    this.route.params.subscribe(params => {
      // alert(params['id']);
      this.business_id = params['b_id'];
      // Get business from id
      this.userService.getBusinessById(this.business_id).subscribe(bus => {
        if (bus.success) {
          console.log(bus.msg[0]);
          const b_obj = bus.msg[0];
          this.business_name = b_obj.business.name;
          this.title.setTitle(b_obj.business.name + ' - Dashboard');
        }else {
          // something went wrong
          console.log(bus);
        }
      });
    });

    // Post user's visit to vendor
    const visit_obj = {
      user_id : this.user_id,
      business_id : this.business_id
    };
    this.userService.postVendorVisitByUser(visit_obj).subscribe(visit => {
      console.log(visit);
    });

    $('#tab-one-trig').click(function() {
      $('.tabs').hide();
      $('.tab-one').show();
      $('.tab-trig').removeClass('selected-trig');
      $(this).addClass('selected-trig');
    });
    $('#tab-two-trig').click(function() {
      $('.tabs').hide();
      $('.tab-two').show();
      $('.tab-trig').removeClass('selected-trig');
      $(this).addClass('selected-trig');
    });
    $('#tab-three-trig').click(function() {
      $('.tabs').hide();
      $('.tab-three').show();
      $('.tab-trig').removeClass('selected-trig');
      $(this).addClass('selected-trig');
    });
    $('#tab-four-trig').click(function() {
      $('.tabs').hide();
      $('.tab-four').show();
      $('.tab-trig').removeClass('selected-trig');
      $(this).addClass('selected-trig');
    });
    $('#tab-five-trig').click(function() {
      $('.tabs').hide();
      $('.tab-five').show();
      $('.tab-trig').removeClass('selected-trig');
      $(this).addClass('selected-trig');
    });
  }
  customFileUploaded(event) {
    this.custom_order_file = event.target.files['0'];
  }
  requestCustomOrder() {
    const formData = new FormData();
    formData.append('buyer_id', this.user_id);
    formData.append('file', this.custom_order_file);
    formData.append('business_id', this.business_id);
    this.userService.postCustomOrder(formData).subscribe(res => {
      console.log(res);
    });

  }

}
