import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Game } from '../_models/game';
import { Deck } from '../_models/deck';

import { Story } from '../_models/story';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';


@Injectable()
export class GameService {
    private heroesUrl = 'http://localhost:6060/PlayPoker/getGames/';
    private gameUrl = 'http://localhost:6060/PlayPoker/getGame/';
    private deleteUrl = 'http://localhost:6060/PlayPoker/delete/';
	private gameDetailURL = 'http://localhost:6060/PlayPoker/getGameDetail/';

  private deckUrl = 'http://localhost:6060/PlayPoker/getDecks';

  private headers = new Headers({'Content-Type': 'application/json'});
  
    constructor(private http: Http) { }


    create(game: Game) {
		console.log("inside create");
		console.log(game.userId);
		console.log(game);
		//game.stories=[{gameId : 1, storyId : 1, storyTitle:"REST CONTROLL"}];
        //{userId:game.userId,gameId:12,guid:"GUID124"}
		return this.http.post('http://localhost:6060/PlayPoker/createGame',game)
		.map((response: Response) => {
		console.log(response.text());
		
		});
    }
	
	
	getDecks(): Observable<Deck[]> {
   /* return [
     new Deck(1, 'Feb' ),
     new Deck(2, 'Sequence' )
	 ];*/
	/*return this.http
      .get(this.deckUrl)
     .map((r: Response) => r.json() as Deck[]);
	 .map(res => <Deck[]> res.json())*/
	 return this.http.get(this.deckUrl)
            .map(res => <Deck[]> res.json())
            .catch(this.handleError);
  }
    getGames(userId : number): Observable<Game[]> {
        // 1has to be replaced from userId
        return this.http
            .get(this.heroesUrl+userId, {headers: this.headers})
            .map((r: Response) => r.json() as Game[]);
    }
  
  getGame(id: number): Promise<Game> {
    return this.http.get(this.gameUrl+id)
        .toPromise()
        .then(response => response.json() as Game)
        .catch(this.handleError);
  }
  
  
    delete(id: number): Promise<void> {
        return this.http.delete(this.deleteUrl+id, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }
	
private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
  
  getGameDetail(guid: string): Observable<Game> {
  console.log("gameDetailURL  "+this.gameDetailURL);
  console.log("guid :- "+guid);

	 return this.http.get(this.gameDetailURL+"?guId="+guid)
				.map(res => <Game> res.json());
		
  }

    editGame(game: Game) {
        console.log("inside editGame");
        console.log(game.userId);
        console.log(game);
        //game.stories=[{gameId : 1, storyId : 1, storyTitle:"REST CONTROLL"}];
        //{userId:game.userId,gameId:12,guid:"GUID124"}
        return this.http.post('http://localhost:6060/PlayPoker/editGame',game)
            .map((response: Response) => {
                console.log(response.text());

            });
    }
  
}