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
require("rxjs/add/operator/map");
var PlayerLoginService = (function () {
    function PlayerLoginService(http) {
        this.http = http;
    }
    PlayerLoginService.prototype.playerLogin = function (name, email, guid) {
        console.log("Welcome PlayerLoginService playerLogin " + guid);
        var json = { "name": name, "email": email, "guid": guid };
        var headers = new http_1.Headers();
        headers.append("Content-Type", 'application/json');
        return this.http.post('http://localhost:6060/PlayPoker/playerLogin', json).map(function (res) { return res.json(); });
    };
    return PlayerLoginService;
}());
PlayerLoginService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PlayerLoginService);
exports.PlayerLoginService = PlayerLoginService;
//# sourceMappingURL=playerLogin.service.js.map