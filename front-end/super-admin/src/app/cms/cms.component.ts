import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
const Quill = require('quill');
declare var $: any;

@Component({
  selector: 'app-cms',
  templateUrl: './cms.component.html',
  styleUrls: ['./cms.component.css']
})
export class CmsComponent implements OnInit {

  constructor(private adminService: AdminService) { }

  terms_editor;
  privacy_editor;
  how_it_works_editor;
  careers_editor;
  vp_editor;
  about_editor_one;

  ngOnInit() {

    this.privacy_editor = new Quill('#privacy-editor', {
      modules: {
        toolbar: [
          [{ header: [1, 2, false] }],
          ['bold', 'italic', 'underline'],
          [{ 'list': 'ordered'}, { 'list': 'bullet' }],
          ['image', 'code-block']
        ]
      },
      placeholder: 'Write here..',
      theme: 'snow'  // or 'bubble'
    });

    this.how_it_works_editor = new Quill('#how_it_works_editor', {
      modules: {
        toolbar: [
          [{ header: [1, 2, false] }],
          ['bold', 'italic', 'underline'],
          [{ 'list': 'ordered'}, { 'list': 'bullet' }],
          ['image', 'code-block']
        ]
      },
      placeholder: 'Write here..',
      theme: 'snow'  // or 'bubble'
    });

    this.terms_editor = new Quill('#terms-editor', {
      modules: {
        toolbar: [
          [{ header: [1, 2, false] }],
          ['bold', 'italic', 'underline'],
          [{ 'list': 'ordered'}, { 'list': 'bullet' }],
          ['image', 'code-block']
        ]
      },
      placeholder: 'Write here..',
      theme: 'snow'  // or 'bubble'
    });

    this.careers_editor = new Quill('#careers-editor', {
      modules: {
        toolbar: [
          [{ header: [1, 2, false] }],
          ['bold', 'italic', 'underline'],
          [{ 'list': 'ordered'}, { 'list': 'bullet' }],
          ['image', 'code-block']
        ]
      },
      placeholder: 'Write here..',
      theme: 'snow'  // or 'bubble'
    });

    this.about_editor_one = new Quill('#about-editor-one', {
      modules: {
        toolbar: [
          [{ header: [1, 2, false] }],
          ['bold', 'italic', 'underline'],
          [{ 'list': 'ordered'}, { 'list': 'bullet' }],
          ['image', 'code-block']
        ]
      },
      placeholder: 'Write here..',
      theme: 'snow'  // or 'bubble'
    });

    this.vp_editor = new Quill('#vendor-policy-editor', {
      modules: {
        toolbar: [
          [{ header: [1, 2, false] }],
          ['bold', 'italic', 'underline'],
          [{ 'list': 'ordered'}, { 'list': 'bullet' }],
          ['image', 'code-block']
        ]
      },
      placeholder: 'Write here..',
      theme: 'snow'  // or 'bubble'
    });

    // Get Terms
    // Get terms from dashboard
    this.adminService.getTerms().subscribe(terms => {
      if (terms.success) {
        this.terms_editor.innerHTML( terms.msg[0].data );
      }else {
        this.terms_editor = 'Something went wrong. Please try again later.';
      }
    });

    // Accordion
    const acc = document.getElementsByClassName('accordion');
    let i;
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener('click', function() {
        this.classList.toggle('active');
        const panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + 'px';
        }
      });
    }
  }
  submitClicked(item) {
    switch (item) {
      case 'home':
        alert('home clicked');
        break;
      case 'how-it-works':
        alert('how it works clicked');
        break;
      case 'about':
        // Post about
        const ab = this.about_editor_one.root.innerHTML;
        const ab_obj = { data : ab };
        this.adminService.PostAbout(ab_obj).subscribe(about_status => {
          if (about_status.success) {
            alert('Posted_successfully');
          } else {
            alert('Something went wrong');
          }
        });
        break;
      case 'careers':
      const ccms = this.careers_editor.root.innerHTML;
      const ccms_obj = {data : ccms};
      this.adminService.PostCareersCMS(ccms_obj).subscribe(res => {
        if (res.success) {
          $('.terms-out').html('Saved Successfully');
        }else {
          $('.terms-out').html('Something went wrong');
        }
      });
        break;
      case 'terms':
        const terms = this.terms_editor.root.innerHTML;
        const obj = {data : terms};
        this.adminService.PostTerms(obj).subscribe(res => {
          if (res.success) {
            $('.terms-out').html('Saved Successfully');
          }else {
            $('.terms-out').html('Something went wrong');
          }
        });
        break;
      case 'privacy':
        const privacy = this.privacy_editor.root.innerHTML;
        const objj = {data : privacy};
        // this.adminService.po
        this.adminService.PostPrivacy(objj).subscribe(res => {
          console.log(res);
          if (res.success) {
            $('.terms-out').html('Saved Successfully');
          }else {
            $('.terms-out').html('Something went wrong');
          }
        });
        break;
      case 'vp':
        const v_policy = this.vp_editor.root.innerHTML;
        const vp_obj = {data : v_policy};
        // this.adminService.po
        this.adminService.PostVendorPolicy(vp_obj).subscribe(res => {
          console.log(res);
          if (res.success) {
            $('.terms-out').html('Saved Successfully');
          }else {
            $('.terms-out').html('Something went wrong');
          }
        });
        break;
      default:
        break;
    }
  }

}
