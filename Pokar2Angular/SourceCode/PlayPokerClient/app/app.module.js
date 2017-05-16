"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var dashboard_module_1 = require("./dashboard/dashboard.module");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var createNewGame_module_1 = require("./createNewGame/createNewGame.module");
var createNewGame_component_1 = require("./createNewGame/createNewGame.component");
var saved_games_component_1 = require("./savedGames/saved-games.component");
var saved_games_module_1 = require("./savedGames/saved-games.module");
var game_service_1 = require("./_services/game.service");
var game_component_1 = require("./game/game.component");
var playerLogin_component_1 = require("./playerLogin/playerLogin.component");
var joinGame_component_1 = require("./joinGame/joinGame.component");
var edit_game_component_1 = require("./game/edit-game.component");
var pass_service_1 = require("./_services/pass.service");
var http_2 = require("@angular/http");
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var index_1 = require("./_directives/index");
var index_2 = require("./_guards/index");
var index_3 = require("./_services/index");
var index_4 = require("./home/index");
var index_5 = require("./login/index");
var index_6 = require("./register/index");
var playerLogin_service_1 = require("./_services/playerLogin.service");
var joinGame_service_1 = require("./_services/joinGame.service");
var my_account_component_1 = require("./my-account/my-account.component");
var myAccount_service_1 = require("./_services/myAccount.service");
var NavigationBar_component_1 = require("./Navigation/NavigationBar.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            dashboard_module_1.DashboardModule,
            createNewGame_module_1.CreateNewGameModule,
            saved_games_module_1.SavedGamesModule,
            forms_1.ReactiveFormsModule,
            app_routing_1.routing
        ],
        declarations: [
            app_component_1.AppComponent,
            index_1.AlertComponent,
            index_4.HomeComponent,
            index_5.LoginComponent,
            index_6.RegisterComponent,
            dashboard_component_1.DashboardComponent,
            createNewGame_component_1.CreateNewGameComponent,
            saved_games_component_1.SavedGamesComponent,
            game_component_1.GameComponent,
            playerLogin_component_1.PlayerLoginComponent,
            joinGame_component_1.JoinGameComponent,
            edit_game_component_1.EditGameComponent,
            my_account_component_1.MyAccountComponent,
            NavigationBar_component_1.NavigationBar
        ],
        providers: [
            index_2.AuthGuard,
            index_3.AlertService,
            index_3.AuthenticationService,
            index_3.UserService,
            http_2.BaseRequestOptions,
            game_service_1.GameService,
            playerLogin_service_1.PlayerLoginService,
            joinGame_service_1.JoinGameService,
            pass_service_1.PassService,
            myAccount_service_1.MyAccountService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map