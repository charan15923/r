import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.css']
})
export class PrivacyComponent implements OnInit {

  constructor(private userService: UserService) { }
  privacy_policy;


  ngOnInit() {
    this.userService.getPrivacyPolicy().subscribe(pp => {
      if (pp.success) {
        if (pp.msg.length > 0) {
          this.privacy_policy = pp.msg[0].data;
        }else{
          this.privacy_policy = 'Something went wrong. Please try again later.';
        }
      }else {
        this.privacy_policy = 'Something went wrong. Please try again later.';
      }
    });
  }

}
