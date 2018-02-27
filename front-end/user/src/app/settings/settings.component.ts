import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    $('.set-li').click(function(){
      $('.set-li').removeClass('selected-set');
      $(this).addClass('selected-set');
    });
  }

}
