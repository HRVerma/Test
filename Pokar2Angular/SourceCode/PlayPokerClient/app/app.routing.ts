import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/index';
import { PlayerLoginComponent } from './playerLogin/playerLogin.component';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';
import { GameComponent } from './game/index';
import {SavedGamesComponent} from './savedGames/saved-games.component';
import {CreateNewGameComponent} from './createNewGame/createNewGame.component';
import { EditGameComponent } from './game/edit-game.component';
import { JoinGameComponent } from './joinGame/joinGame.component';
import { MyAccountComponent } from './my-account/my-account.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'playerLogin', component: PlayerLoginComponent},
    { path: 'joinGame', component: JoinGameComponent},
    { path: 'register', component: RegisterComponent },
    // { path: 'home', component: DashboardComponent },
    // { path: 'createGame', component: GameComponent },
    // {
    
    // otherwise redirect to home
    //{ path: '**', redirectTo: '' },

    { path: 'dashboard', component: DashboardComponent,
        children: [
            { path: '', redirectTo: 'savedGames', pathMatch: 'full' },
            // { path: 'createnewgame', component: CreateNewGameComponent },
            { path: 'createGame', component: GameComponent },
			{ path: 'editGame/:guid', component: EditGameComponent },
            { path: 'savedGames', component: SavedGamesComponent },
			{ path: 'myAccount', component: MyAccountComponent },
        ]
    }
];

export const routing = RouterModule.forRoot(appRoutes);