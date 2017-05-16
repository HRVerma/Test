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
 * Created by uvats on 1/18/2017.
 */
var core_1 = require("@angular/core");
var game_service_1 = require("../_services/game.service");
var router_1 = require("@angular/router");
var Subject_1 = require("rxjs/Subject");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/switchMap");
require("rxjs/add/operator/catch");
var pass_service_1 = require("../_services/pass.service");
var SavedGamesComponent = (function () {
    function SavedGamesComponent(gameService, router, passService) {
        this.gameService = gameService;
        this.router = router;
        this.passService = passService;
        this.searchTerms = new Subject_1.Subject();
    }
    ;
    SavedGamesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.gameService.getGames(this.passService.userId).subscribe(function (games) { return _this.games = games; });
    };
    SavedGamesComponent.prototype.onSelect = function (game) {
        this.selectedGame = game;
    };
    SavedGamesComponent.prototype.load = function (game) {
        this.router.navigate(['/joinGame']);
    };
    SavedGamesComponent.prototype.createNewGame = function () {
        this.router.navigate(['/dashboard/createGame']);
    };
    SavedGamesComponent.prototype.editGame = function (guid) {
        console.log("=====>" + guid);
        this.router.navigate(['/dashboard/editGame', guid]);
    };
    SavedGamesComponent.prototype.delete = function (game) {
        var _this = this;
        this.gameService.delete(game.gameId).then(function () {
            _this.games = _this.games.filter(function (h) { return h !== game; });
            //  if (this.selectedHero === hero) { this.selectedHero = null; }
        });
    };
    return SavedGamesComponent;
}());
SavedGamesComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'savedGames',
        template: "\n<h3 class=\"margin-top-bottom\">Saved Games</h3>\n    <div class=\"form-txt-color grid-data-container\" *ngFor=\"let game of games\">\n     <div class=\"col-xs-12 col-lg-9 padding-lr-0\">\n          <h4 class=\"story-txt\">{{game.gameName}}</h4>\n          <p class=\"para-txt\">https://play.planningpoker.com/play/game/jEaBloKe</p>\n          <p>{{game.description}}</p>\n          <ul class=\"grid-data\">\n            <li class=\"li-one\">\n              <div>Stories</div>\n               {{game.storyCount}}</li>\n            <li class=\"li-two\">\n              <div>Total Effort Points</div>\n              {{game.gameName}}</li>              \n            <li class=\"li-four\">\n              <div>Created</div>{{game.createdDate| date: 'dd/MMM/yyyy h:mma'}}</li>\n              <!--an hour ago</li>-->\n          </ul>\n          <ul class=\"grid-data\"><li class=\"li-two\">\n               <div>Deck-Type</div>\n              {{game.deckType}}</li></ul>\n        </div>\n      <div class=\"col-xs-12 col-lg-3\">\n          <div class=\"nav navbar-nav top-btn\">\n            <button type=\"submit\" class=\"btn btn-success btn-xs\" (click)=\"load(game)\" [disabled]=\"game.status=='OPEN'?'':'disabled'\">Load Game</button>\n            <button type=\"submit\" class=\"btn btn-warning btn-xs\" (click)=\"editGame(game.guid)\" [disabled]=\"game.status=='OPEN'?'':'disabled'\">Edit Game</button>\n            <button type=\"submit\" class=\"btn btn-danger btn-xs\" (click)=\"delete(game)\">Delete Game</button>\n       \n        </div>\n      </div>\n        <br clear=\"all\">\n     </div>  \n  <!--<router-outlet></router-outlet>-->\n"
    }),
    __metadata("design:paramtypes", [game_service_1.GameService, router_1.Router, pass_service_1.PassService])
], SavedGamesComponent);
exports.SavedGamesComponent = SavedGamesComponent;
//# sourceMappingURL=saved-games.component.js.map