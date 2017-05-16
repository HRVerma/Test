/**
 * Created by uvats on 1/17/2017.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }    from './dashboard.component';
import { CreateNewGameComponent }    from '../createNewGame/createNewGame.component';


const dashboardRoutes: Routes = [
  // { path: 'dashboard',  component: DashboardComponent },
  // { path: 'createnewgame',  component: CreateNewGameComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(dashboardRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule { }
