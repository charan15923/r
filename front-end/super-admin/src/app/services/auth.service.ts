import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';


@Injectable()
export class AuthService {
    authToken: any;
    user: any;
    constructor(private http: Http) { }
    registerUser(user) {
      const header = new Headers();
      header.append('Content-Type', 'application/json');
      return this.http.post('http://localhost:3000/admin/register', user, { headers: header }).map(res => res.json());
    }
    authenticateUser(user) {
        const header = new Headers();
        header.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/admin/authenticate', user, { headers: header }).map(res => res.json());
    }
    authenticateMobile(mobile: string) {
      return this.http.get('http://localhost:3000/admin/find-mobile/' + mobile).map(res => res.json());
    }
    authenticateEmail(email: string) {
      return this.http.get('http://localhost:3000/admin/find-email/' + email).map(res => res.json());
    }
    getUserFromLocal() {
        const user = localStorage.getItem('user');
        return user;
    }
    updateUser(user) {
        const header = new Headers();
        header.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/admin/update-user', user, { headers: header }).map(res => res.json());
    }
    updatePassword(pwd) {
        const header = new Headers();
        header.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/admin/update-pwd', pwd, { headers: header }).map(res => res.json());
    }
    storeUserData(token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    }
    loggedIn() {
        return tokenNotExpired('id_token');
    }
    logout() {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    }
}

