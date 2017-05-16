/**
 * Created by uvats on 1/19/2017.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent }    from '../game/game.component';


const savedGamesRoutes: Routes = [
  { path: 'game/:userId',  component: GameComponent },
  { path: 'load/:userId',  component: GameComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(savedGamesRoutes)
    //RouterModule.forRoot(savedGamesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SavedGemesRoutingModule { }
