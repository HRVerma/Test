import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule }    from '@angular/forms';
import {HttpModule, Http} from '@angular/http';
import { Router, RouterOutlet } from "@angular/router";
import {DashboardModule} from './dashboard/dashboard.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CreateNewGameModule} from './createNewGame/createNewGame.module';
import {CreateNewGameComponent} from './createNewGame/createNewGame.component';
import {SavedGamesComponent} from './savedGames/saved-games.component';
import {SavedGamesModule} from './savedGames/saved-games.module';
import {GameService} from "./_services/game.service";
import {GameComponent} from './game/game.component';
import {PlayerLoginComponent} from './playerLogin/playerLogin.component';
import {JoinGameComponent} from './joinGame/joinGame.component';
import { EditGameComponent } from './game/edit-game.component';
import {PassService} from './_services/pass.service';
import { BaseRequestOptions } from '@angular/http';
import { AppComponent }  from './app.component';
import { routing }        from './app.routing';
import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import {PlayerLoginService } from './_services/playerLogin.service';
import {JoinGameService } from './_services/joinGame.service';
import { MyAccountComponent } from './my-account/my-account.component';
import {MyAccountService} from './_services/myAccount.service';
import {NavigationBar} from "./Navigation/NavigationBar.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
		DashboardModule,
        CreateNewGameModule,
        SavedGamesModule,
		ReactiveFormsModule,
        routing
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
		DashboardComponent,
        CreateNewGameComponent,
        SavedGamesComponent,
        GameComponent,
        PlayerLoginComponent,
        JoinGameComponent,
		EditGameComponent,
        MyAccountComponent,
        NavigationBar
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        BaseRequestOptions,
		GameService,
        PlayerLoginService,
        JoinGameService,
		PassService,
        MyAccountService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }