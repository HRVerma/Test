﻿import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, AuthenticationService } from '../_services/index';
import {LoginRes} from "../_models/LoginRes";
import {PassService} from '../_services/pass.service';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html',
   // styleUrls:['../static/css/bootstrap.min.css','../static/css/ie10-viewport-bug-workaround.css','../static/css/offcanvas.css','../static/css/style-input.css','../static/css/customize.css']
   /* template:
    '<button (click)="login()">Please Click</button>'+
    '<p>OutPut:{{getData}}</p>'*/
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;
    getData: string;


    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService,
		 private passService: PassService) { }

    ngOnInit() {
        // reset login status
      /*  this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';*/
    }

    login() {
        this.loading = true;
        this.authenticationService.login(this.model.userName, this.model.password)
            .subscribe(
                loginRes => {

                    /*this.getData=JSON.stringify(data),
                        ()=>console.log(this.getData),*/
                   // this.loginRes=data.getAt(1);
                    if ( loginRes.userName=='true')
                    {
                        this.alertService.success('invalid username or password', true);
                        this.router.navigate(['/login']);
                    }
                    else
                    {
                     /*   this.alertService.success('', false);
						this.passService.setUserId(loginRes.userId);
                        this.router.navigate(['/dashboard']);*/

                        if(localStorage.getItem('currentUser')==loginRes.email)
                        {

                            this.passService.setUserId(loginRes.email);
                            this.router.navigate(['/dashboard']);
                            this.alertService.success('User already Login', true);
                        }
                        //this.alertService.success('', false);
                        this.passService.setUserId(loginRes.userId);
                        this.passService.currentPassword=loginRes.password;
                        this.router.navigate(['/dashboard']);

                        localStorage.setItem('currentUser', loginRes.email);
                        //  this.alertService.success('Already Registered', true);
                      //  this.alertService.success('Already Registered', true);
                    }


                      /*  this.a
                        ()=>console.log("Finished")*/
                })
               /* error => {
                    this.alertService.error(error);
                    this.loading = false;
                });*/
    }
}
