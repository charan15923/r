import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private userService: UserService) { }
  about_text;

  ngOnInit() {
    // Get about
    this.userService.getAbout().subscribe(ab => {
      if (ab.success) {
        this.about_text = ab.msg['0'].data;
      } else {
        this.about_text = 'Something went wrong try refreshing the page.';
      }
    })
  }

}
