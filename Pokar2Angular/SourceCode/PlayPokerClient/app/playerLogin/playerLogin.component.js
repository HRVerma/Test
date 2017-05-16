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
var playerLogin_service_1 = require("../_services/playerLogin.service");
var PlayerLoginComponent = (function () {
    function PlayerLoginComponent(route, router, playerLoginService) {
        this.route = route;
        this.router = router;
        this.playerLoginService = playerLoginService;
        this.model = {};
        this.loading = false;
    }
    PlayerLoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("Welcome PlayerLoginComponent ngOnInit ");
        this.route.queryParams.subscribe(function (data) {
            _this.guid = data['guid'];
        });
        console.log("........GUID  ::  " + this.guid);
        this.model.guid = this.guid;
    };
    PlayerLoginComponent.prototype.playerLogin = function () {
        var _this = this;
        console.log("Welcome PlayerLoginComponent playerLogin " + this.model.guid);
        this.loading = true;
        this.playerLoginService.playerLogin(this.model.name, this.model.email, this.model.guid)
            .subscribe(function (gamePlayerRes) {
            console.log("Welcome PlayerLoginComponent playerLogin : " + gamePlayerRes.playerName
                + " Email :: " + gamePlayerRes.email
                + " GUID :: " + gamePlayerRes.guid);
            //this.router.navigate(['/joinGame'],{queryParams: {gamePlayer: JSON.stringify(gamePlayerRes)}});
            localStorage.setItem('GamePlayerRes', JSON.stringify(gamePlayerRes));
            _this.router.navigate(['/joinGame']);
        });
    };
    return PlayerLoginComponent;
}());
PlayerLoginComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'playerLogin',
        templateUrl: 'playerLogin.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        playerLogin_service_1.PlayerLoginService])
], PlayerLoginComponent);
exports.PlayerLoginComponent = PlayerLoginComponent;
//# sourceMappingURL=playerLogin.component.js.map