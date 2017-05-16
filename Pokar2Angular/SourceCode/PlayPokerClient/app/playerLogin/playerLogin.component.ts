/**
 * Created by SDagar on 1/31/2017.
 */

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {GamePlayerRes} from '../_models/GamePlayerRes';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import {PlayerLoginService } from '../_services/playerLogin.service';

@Component({
    moduleId: module.id,
    selector: 'playerLogin',
    templateUrl: 'playerLogin.component.html'
})

export class PlayerLoginComponent {
    model: any = {};
    loading = false;
    returnUrl: string;
    getData: string;
    guid: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private playerLoginService: PlayerLoginService) { }

    ngOnInit() {
        console.log("Welcome PlayerLoginComponent ngOnInit ");
        this.route.queryParams.subscribe(data=> {
            this.guid = data['guid'];
        })
        console.log("........GUID  ::  "+  this.guid);
        this.model.guid=this.guid;
    }

    playerLogin() {
        console.log("Welcome PlayerLoginComponent playerLogin "+this.model.guid);
        this.loading = true;
        this.playerLoginService.playerLogin(this.model.name, this.model.email, this.model.guid)
            .subscribe(
                gamePlayerRes => {
                    console.log("Welcome PlayerLoginComponent playerLogin : "+ gamePlayerRes.playerName
                        +" Email :: "+gamePlayerRes.email
                        +" GUID :: "+ gamePlayerRes.guid);
                    //this.router.navigate(['/joinGame'],{queryParams: {gamePlayer: JSON.stringify(gamePlayerRes)}});
                    localStorage.setItem('GamePlayerRes',JSON.stringify(gamePlayerRes));
                    this.router.navigate(['/joinGame']);
                }
            )
    }

}