/**
 * Created by uvats on 1/18/2017.
 */
import { Component, OnInit } from '@angular/core';
import { GameService } from '../_services/game.service';
import { Game } from '../_models/game';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import {GameComponent} from '../game/game.component';
import {PassService} from '../_services/pass.service';

@Component({
  moduleId: module.id,
  selector: 'savedGames',
  template: `
<h3 class="margin-top-bottom">Saved Games</h3>
    <div class="form-txt-color grid-data-container" *ngFor="let game of games">
     <div class="col-xs-12 col-lg-9 padding-lr-0">
          <h4 class="story-txt">{{game.gameName}}</h4>
          <p class="para-txt">https://play.planningpoker.com/play/game/jEaBloKe</p>
          <p>{{game.description}}</p>
          <ul class="grid-data">
            <li class="li-one">
              <div>Stories</div>
               {{game.storyCount}}</li>
            <li class="li-two">
              <div>Total Effort Points</div>
              {{game.gameName}}</li>              
            <li class="li-four">
              <div>Created</div>{{game.createdDate| date: 'dd/MMM/yyyy h:mma'}}</li>
              <!--an hour ago</li>-->
          </ul>
          <ul class="grid-data"><li class="li-two">
               <div>Deck-Type</div>
              {{game.deckType}}</li></ul>
        </div>
      <div class="col-xs-12 col-lg-3">
          <div class="nav navbar-nav top-btn">
            <button type="submit" class="btn btn-success btn-xs" (click)="load(game)" [disabled]="game.status=='OPEN'?'':'disabled'">Load Game</button>
            <button type="submit" class="btn btn-warning btn-xs" (click)="editGame(game.guid)" [disabled]="game.status=='OPEN'?'':'disabled'">Edit Game</button>
            <button type="submit" class="btn btn-danger btn-xs" (click)="delete(game)">Delete Game</button>
       
        </div>
      </div>
        <br clear="all">
     </div>  
  <!--<router-outlet></router-outlet>-->
`
})
export class SavedGamesComponent implements OnInit {
  games: Game[];
  private searchTerms = new Subject<string>();
  selectedGame: Game;
  constructor(private gameService: GameService, private router: Router,private passService: PassService){};

  ngOnInit(): void {
    this.gameService.getGames(this.passService.userId).subscribe(
      games => this.games = games
    )
  }
  onSelect(game: Game): void {
    this.selectedGame = game;
  }

  load(game: Game):void{
    this.router.navigate(['/joinGame']);
  }

  createNewGame(): void {
    this.router.navigate(['/dashboard/createGame']);
  }

  editGame(guid:string): void{
  console.log("=====>"+guid);
    this.router.navigate(['/dashboard/editGame',guid]);
  }
  delete(game:Game): void {
    this.gameService.delete(game.gameId).then(() => {
          this.games = this.games.filter(h => h !== game);
          //  if (this.selectedHero === hero) { this.selectedHero = null; }
        }
    )
  }

}
