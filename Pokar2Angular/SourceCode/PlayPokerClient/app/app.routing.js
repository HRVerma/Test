"use strict";
var router_1 = require("@angular/router");
var index_1 = require("./home/index");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var index_2 = require("./login/index");
var playerLogin_component_1 = require("./playerLogin/playerLogin.component");
var index_3 = require("./register/index");
var index_4 = require("./_guards/index");
var index_5 = require("./game/index");
var saved_games_component_1 = require("./savedGames/saved-games.component");
var edit_game_component_1 = require("./game/edit-game.component");
var joinGame_component_1 = require("./joinGame/joinGame.component");
var my_account_component_1 = require("./my-account/my-account.component");
var appRoutes = [
    { path: '', component: index_1.HomeComponent, canActivate: [index_4.AuthGuard] },
    { path: 'login', component: index_2.LoginComponent },
    { path: 'playerLogin', component: playerLogin_component_1.PlayerLoginComponent },
    { path: 'joinGame', component: joinGame_component_1.JoinGameComponent },
    { path: 'register', component: index_3.RegisterComponent },
    // { path: 'home', component: DashboardComponent },
    // { path: 'createGame', component: GameComponent },
    // {
    // otherwise redirect to home
    //{ path: '**', redirectTo: '' },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent,
        children: [
            { path: '', redirectTo: 'savedGames', pathMatch: 'full' },
            // { path: 'createnewgame', component: CreateNewGameComponent },
            { path: 'createGame', component: index_5.GameComponent },
            { path: 'editGame/:guid', component: edit_game_component_1.EditGameComponent },
            { path: 'savedGames', component: saved_games_component_1.SavedGamesComponent },
            { path: 'myAccount', component: my_account_component_1.MyAccountComponent },
        ]
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map