/**
 * Created by SDagar on 1/31/2017.
 */

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {GamePlayerRes} from '../_models/GamePlayerRes';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import {JoinGameService } from '../_services/joinGame.service';

@Component({
    moduleId: module.id,
    templateUrl: 'joinGame.component.html'
})

export class JoinGameComponent {

    gamePlayerRes: GamePlayerRes;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private joinGameService: JoinGameService) { }

    ngOnInit() {
        console.log("Welcome JoinGameComponent ngOnInit ");
        /*this.route.queryParams.subscribe(data => {
            console.log("PlayerName : "+data['gamePlayer']);
                this.gamePlayerRes = JSON.parse(data['gamePlayer']);
            console.log("PlayerName : "+ this.gamePlayerRes.playerName
                +" Email :: "+this.gamePlayerRes.email
                +" GUID :: "+ this.gamePlayerRes.guid);
            });*/
        this.gamePlayerRes = JSON.parse(localStorage.getItem('GamePlayerRes'))
        console.log(" gamePlayerRes" +this.gamePlayerRes.playerName);    }
}