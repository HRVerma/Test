/**
 * Created by uvats on 1/17/2017.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNewGameComponent }    from './createNewGame.component';

const createnewgame: Routes = [
  { path: 'createnewgame',  component: CreateNewGameComponent },

];

@NgModule({
  imports: [
    RouterModule.forChild(createnewgame)
  ],
  exports: [
    RouterModule
  ]
})
export class CreateNewGameRoutingModule { }
