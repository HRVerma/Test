"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by uvats on 1/19/2017.
 */
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var game_component_1 = require("../game/game.component");
var savedGamesRoutes = [
    { path: 'game/:userId', component: game_component_1.GameComponent },
    { path: 'load/:userId', component: game_component_1.GameComponent },
];
var SavedGemesRoutingModule = (function () {
    function SavedGemesRoutingModule() {
    }
    return SavedGemesRoutingModule;
}());
SavedGemesRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(savedGamesRoutes)
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], SavedGemesRoutingModule);
exports.SavedGemesRoutingModule = SavedGemesRoutingModule;
//# sourceMappingURL=saved-games-routing.module.js.map