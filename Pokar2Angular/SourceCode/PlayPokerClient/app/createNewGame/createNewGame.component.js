/**
 * Created by uvats on 1/17/2017.
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
var common_1 = require("@angular/common");
var CreateNewGameComponent = (function () {
    function CreateNewGameComponent(router, location) {
        this.title = 'Create New Game';
        this.router = router;
        this.location = location;
    }
    CreateNewGameComponent.prototype.cancel = function () {
        this.location.back();
    };
    return CreateNewGameComponent;
}());
CreateNewGameComponent = __decorate([
    core_1.Component({
        selector: 'my-create',
        template: "\n              <div>\n              <h2>{{title}}</h2>\n              </div>\n              <button (click)=\"cancel()\">CANCEL</button>       \n              <router-outlet></router-outlet>\n"
    }),
    __metadata("design:paramtypes", [router_1.Router, common_1.Location])
], CreateNewGameComponent);
exports.CreateNewGameComponent = CreateNewGameComponent;
//# sourceMappingURL=createNewGame.component.js.map