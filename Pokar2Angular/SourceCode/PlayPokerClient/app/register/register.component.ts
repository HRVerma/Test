import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, UserService } from '../_services/index';
import {UserRes} from "../_models/UserRes";
import {User} from "../_models/user"
import {LoginRes} from "../_models/LoginRes";

@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
    model: any = {};
    loading = false;
    loginRes: LoginRes;


    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { }


    register() {
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(
                loginRes => {

                    if(loginRes.userName=='true')
                    {

                        console.log('Registration successful');
                        this.alertService.success('Registration successful', true);
                        this.router.navigate(['/login']);

                    }
                    else {
                        this.alertService.success('Registration unsuccessful', true);
                    }

                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
