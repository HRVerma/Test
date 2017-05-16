/**
 * Created by uvats on 1/17/2017.
 */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from '../_services/game.service';
import {PassService} from '../_services/pass.service';


@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl:'dashboard.html'
})

export class DashboardComponent  {

  constructor(private gameService: GameService,private router: Router,private passService: PassService) { }

  createNewGame(): void {
    this.router.navigate(['/dashboard/createGame']);
  }

  savedGames(): void {
    this.router.navigate(['/dashboard/savedGames']);
  }
  
  myAccount(): void {
    this.router.navigate(['/dashboard/myAccount']);
  }
  logOut()
  {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }

}
