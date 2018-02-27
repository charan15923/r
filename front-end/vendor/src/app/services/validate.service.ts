import { Injectable } from '@angular/core';
@Injectable()
export class ValidateService {
    constructor() { }
    validateMobile(mobile) {
        return /^\d{10}$/.test(mobile);
    }
    validateEmail(email) {
        // tslint:disable-next-line:max-line-length
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    validateInput(string) {
        if (string === undefined || string === null || string === '') {
            return false;
        }else {
            return true;
        }
    }
}
