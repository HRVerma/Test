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
/**
 * Created by uvats on 1/17/2017.
 */
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var game_service_1 = require("../_services/game.service");
var pass_service_1 = require("../_services/pass.service");
var DashboardComponent = (function () {
    function DashboardComponent(gameService, router, passService) {
        this.gameService = gameService;
        this.router = router;
        this.passService = passService;
    }
    DashboardComponent.prototype.createNewGame = function () {
        this.router.navigate(['/dashboard/createGame']);
    };
    DashboardComponent.prototype.savedGames = function () {
        this.router.navigate(['/dashboard/savedGames']);
    };
    DashboardComponent.prototype.myAccount = function () {
        this.router.navigate(['/dashboard/myAccount']);
    };
    DashboardComponent.prototype.logOut = function () {
        localStorage.removeItem('currentUser');
        this.router.navigate(['/login']);
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-dashboard',
        templateUrl: 'dashboard.html'
    }),
    __metadata("design:paramtypes", [game_service_1.GameService, router_1.Router, pass_service_1.PassService])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map