/**
 * Created by SDagar on 1/31/2017.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
require("rxjs/add/operator/map");
var joinGame_service_1 = require("../_services/joinGame.service");
var JoinGameComponent = (function () {
    function JoinGameComponent(route, router, joinGameService) {
        this.route = route;
        this.router = router;
        this.joinGameService = joinGameService;
    }
    JoinGameComponent.prototype.ngOnInit = function () {
        console.log("Welcome JoinGameComponent ngOnInit ");
        /*this.route.queryParams.subscribe(data => {
            console.log("PlayerName : "+data['gamePlayer']);
                this.gamePlayerRes = JSON.parse(data['gamePlayer']);
            console.log("PlayerName : "+ this.gamePlayerRes.playerName
                +" Email :: "+this.gamePlayerRes.email
                +" GUID :: "+ this.gamePlayerRes.guid);
            });*/
        this.gamePlayerRes = JSON.parse(localStorage.getItem('GamePlayerRes'));
        console.log(" gamePlayerRes" + this.gamePlayerRes.playerName);
    };
    return JoinGameComponent;
}());
JoinGameComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'joinGame.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        joinGame_service_1.JoinGameService])
], JoinGameComponent);
exports.JoinGameComponent = JoinGameComponent;
//# sourceMappingURL=joinGame.component.js.map