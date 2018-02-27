import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import * as moment from 'moment';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {


  constructor(private userService: UserService) { }
  careers_p;
  ngOnInit() {
    // Get careers cms
    this.userService.getCareersCMS().subscribe(ccms => {
      if (ccms.success) {
        console.log(ccms);
        this.careers_p = ccms.msg['0'].data;
      }else {

      }
    });
  }

}
