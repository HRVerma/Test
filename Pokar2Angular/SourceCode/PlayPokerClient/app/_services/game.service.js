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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
require("rxjs/add/operator/map");
var GameService = (function () {
    function GameService(http) {
        this.http = http;
        this.heroesUrl = 'http://localhost:6060/PlayPoker/getGames/';
        this.gameUrl = 'http://localhost:6060/PlayPoker/getGame/';
        this.deleteUrl = 'http://localhost:6060/PlayPoker/delete/';
        this.gameDetailURL = 'http://localhost:6060/PlayPoker/getGameDetail/';
        this.deckUrl = 'http://localhost:6060/PlayPoker/getDecks';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    GameService.prototype.create = function (game) {
        console.log("inside create");
        console.log(game.userId);
        console.log(game);
        //game.stories=[{gameId : 1, storyId : 1, storyTitle:"REST CONTROLL"}];
        //{userId:game.userId,gameId:12,guid:"GUID124"}
        return this.http.post('http://localhost:6060/PlayPoker/createGame', game)
            .map(function (response) {
            console.log(response.text());
        });
    };
    GameService.prototype.getDecks = function () {
        /* return [
          new Deck(1, 'Feb' ),
          new Deck(2, 'Sequence' )
          ];*/
        /*return this.http
          .get(this.deckUrl)
         .map((r: Response) => r.json() as Deck[]);
         .map(res => <Deck[]> res.json())*/
        return this.http.get(this.deckUrl)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    GameService.prototype.getGames = function (userId) {
        // 1has to be replaced from userId
        return this.http
            .get(this.heroesUrl + userId, { headers: this.headers })
            .map(function (r) { return r.json(); });
    };
    GameService.prototype.getGame = function (id) {
        return this.http.get(this.gameUrl + id)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    GameService.prototype.delete = function (id) {
        return this.http.delete(this.deleteUrl + id, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    GameService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    GameService.prototype.getGameDetail = function (guid) {
        console.log("gameDetailURL  " + this.gameDetailURL);
        console.log("guid :- " + guid);
        return this.http.get(this.gameDetailURL + "?guId=" + guid)
            .map(function (res) { return res.json(); });
    };
    GameService.prototype.editGame = function (game) {
        console.log("inside editGame");
        console.log(game.userId);
        console.log(game);
        //game.stories=[{gameId : 1, storyId : 1, storyTitle:"REST CONTROLL"}];
        //{userId:game.userId,gameId:12,guid:"GUID124"}
        return this.http.post('http://localhost:6060/PlayPoker/editGame', game)
            .map(function (response) {
            console.log(response.text());
        });
    };
    return GameService;
}());
GameService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], GameService);
exports.GameService = GameService;
//# sourceMappingURL=game.service.js.map