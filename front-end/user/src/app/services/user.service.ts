import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';


@Injectable()
export class UserService {
  constructor(private http: Http) { }

  // Get user location
  // Maps API Key :  AIzaSyAlfN_GR681GxDY-CAoUSGbY2xJIhE4GsY
  getLocation(lat: number, long: number) {
    // tslint:disable-next-line:max-line-length
    return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + long + '&key=AIzaSyAlfN_GR681GxDY-CAoUSGbY2xJIhE4GsY').map
        ((response) => response.json());
  }
  // Post user location
    PostUserLocation(user_location_object) {

      const header = new Headers();
        header.append('Content-Type', 'application/json');
        // tslint:disable-next-line:max-line-length
        return this.http.post('http://localhost:3000/user/post-user-location', user_location_object, { headers: header }).map(res => res.json());
    }

    // Post order
    postOrder(order) {
      const header = new Headers();
      header.append('Content-Type', 'application/json');
      // tslint:disable-next-line:max-line-length
      return this.http.post('http://localhost:3000/user/post-order', order, { headers: header }).map(res => res.json());
    }

    // Post review
    postReview(review_obj) {
      const header = new Headers();
      header.append('Content-Type', 'application/json');
      // tslint:disable-next-line:max-line-length
      return this.http.post('http://localhost:3000/user/post-review', review_obj, { headers: header }).map(res => res.json());
    }

    postVendorVisitByUser(vist_obj) {
      const header = new Headers();
      header.append('Content-Type', 'application/json');
      // tslint:disable-next-line:max-line-length
      return this.http.post('http://localhost:3000/user/post-vendor-visit-by-user', vist_obj, { headers: header }).map(res => res.json());
    }

    // Get terms for terms and conditions page
    getTerms() {
      return this.http.get('http://localhost:3000/user/get-terms').map(res => res.json());
    }
    // Get privacy policy
    getPrivacyPolicy() {
      return this.http.get('http://localhost:3000/user/privacy-policy').map(res => res.json());
    }

    // Get careers cms
    getCareersCMS() {
      return this.http.get('http://localhost:3000/user/careers-cms').map(res => res.json());
    }
    // Get vendor policy
    getVendorPolicy() {
      return this.http.get('http://localhost:3000/user/vendor-policy').map(res => res.json());
    }
    getAbout() {
      return this.http.get('http://localhost:3000/user/get-about').map(res => res.json());
    }
    updateTotalSiteVisits() {
      return this.http.get('http://localhost:3000/user/update-site-visits').map(res => res.json());
    }
    getMainCats() {
      return this.http.get('http://localhost:3000/user/get-main-cats').map(res => res.json());
    }
    getAllBusinesses() {
      return this.http.get('http://localhost:3000/user/get-all-businesses').map(res => res.json());
    }
    // Business open/close status
    getBusinessStatus(b_id) {
      // tslint:disable-next-line:max-line-length
      return this.http.get('http://localhost:3000/user/get-business-status/' + b_id).map(res => res.json());
    }
    // Get Category from cat_id
    getCatfromCatId(cat_id) {
      return this.http.get('http://localhost:3000/user/get-cat-from-id/' + cat_id).map(res => res.json());
    }
    // Get Business by id
    getBusinessById(b_id) {
      return this.http.get('http://localhost:3000/user/get-business-by-id/' + b_id).map(res => res.json());
    }
    // Post Custom Order
    postCustomOrder(order) {
      const header = new Headers();
      header.append('Content-Type', 'application/json');
      // tslint:disable-next-line:max-line-length
      return this.http.post('http://localhost:3000/user/post-custom-order', order, { headers: header }).map(res => res.json());
    }
}

