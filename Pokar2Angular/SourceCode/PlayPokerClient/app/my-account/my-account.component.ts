import { Component ,Input} from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {HttpModule} from '@angular/http';
import { Story } from '../_models/story';
import { Game } from '../_models/game';
import { Deck } from '../_models/deck';
import { User } from '../_models/user';

import { AlertService, GameService } from '../_services/index';
import {PassService} from '../_services/pass.service';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import {MyAccountService} from '../_services/myAccount.service';



@Component({
    moduleId: module.id,
	selector: 'myAccount',
    templateUrl: 'my-account.html',
	styleUrls:['../static/css/bootstrap.min.css','../static/css/ie10-viewport-bug-workaround.css','../static/css/offcanvas.css','../static/css/style-input.css','../static/css/customize.css'],
	providers:[HttpModule]
})

export class MyAccountComponent {


	public model:any = {};


	constructor(private router:Router,
				private myAccountService:MyAccountService,
				private alertService:AlertService, private _fb:FormBuilder, private route:ActivatedRoute,
				private passService:PassService) {
		console.log("MyAccountComponent ngOnInit====");

	}

	ngOnInit() {
		console.log("inside NgOnit myAccount ");

	}


	updatePlayerName() {
		this.model.userId = this.passService.getUserId();
		//this.model.playerName=this.model.playername;
		console.log("5467462313456d-->" + this.model.playername + "  userid " + this.passService.getUserId() + ":" + this.model.id);

		this.myAccountService.updatePlayerName(this.model).subscribe(
			data => {
				console.log("-*-*-*-*-* inside myaccountcomponent *-*-*-*-*--*");
				this.alertService.success("Name has been updated Successfully.", false);
			},
			error => {
				console.log("inside eror");
				this.alertService.error("Somthing went wrong");
			});
	}

	changePassword() {
		this.model.userId = this.passService.getUserId();
		//this.model.playerName=this.model.playername;
		console.log("5467462313456d-->" + this.model.playername + "  userid " + this.passService.getUserId() + ":" + this.model.id);
		if (this.passService.currentPassword === this.model.currentPassword) {
			if (this.model.newPassword === this.model.confirmNewPassword) {
				if (this.model.newPassword !== this.model.currentPassword) {
					this.myAccountService.changePassword(this.model).subscribe(
						data => {
							console.log("-*-*-*-*-* inside myaccountcomponent *-*-*-*-*--*");
							this.model.newPassword = '';
							this.model.confirmNewPassword = '';
							this.model.currentPassword = '';
							this.alertService.success("Password has been updated Successfully.", false);
						},
						error => {
							console.log("inside eror");
							this.alertService.error("Somthing went wrong");
						});
				}
				else {
					this.alertService.error("New Password must be different from Current Password.", false);
				}
			} else {
				this.alertService.error("New Password and confirm password are not same.", false);
			}
		}
		else {
			this.alertService.error("Current Password is wrong.Please Enter Correct current Password.", false);
		}
	}
	
	deleteAccount() {  //need to know which recipients are checked
		this.model.userId=this.passService.userId;
		this.myAccountService.deleteAccount(this.model.userId).subscribe(
            data => {
                console.log("-*-*-*-*-* inside deleteAccount *-*-*-*-*--*");
                this.alertService.success("Account has been deleted Successfully.",false);
                this.passService.setUserId(null);
                this.router.navigate(['/login']);
            },
            error => {
                console.log("inside eror");
                this.alertService.error("Somthing went wrong");
            }

        );

	}
}