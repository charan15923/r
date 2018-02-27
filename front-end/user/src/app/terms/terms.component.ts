import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css']
})
export class TermsComponent implements OnInit {

  constructor(private userService: UserService) { }
  terms;
  ngOnInit() {
    // Get terms from dashboard
    this.userService.getTerms().subscribe(terms => {
      if (terms.success) {
        this.terms = terms.msg[0].data;
      }else {
        this.terms = 'Something went wrong. Please try again later.';
      }
    });
  }

}
