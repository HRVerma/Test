import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import {PlayerLoginRes} from "../_models/GamePlayerRes";
import { Router, RouterOutlet } from "@angular/router";
import { User } from '../_models/user';

@Injectable()
export class MyAccountService {

    constructor(private http: Http) { }

    updatePlayerName(user:User){

        console.log("updatePlayerName Service " + user.playername+" userid "+user.id);
        console.log("updatePlayerName Service User Object" + JSON.stringify(user));
        var json={
            "playerName":user.playername,
            "userId":user.id
        };
        console.log("json--->"+json);

        var headers=new Headers();
        headers.append("Content-Type",'application/json');

        return this.http.post('http://localhost:6060/PlayPoker/changePlayerName',user)
            .map(response =>Response = response);

    }

    changePassword(user:User){

        console.log("changePassword Service " + user.playername+" userid "+user.id);
        console.log("changePassword Service User Object" + JSON.stringify(user));
        var json={
            "playerName":user.playername,
            "userId":user.id
        };
        console.log("json--->"+json);

        var headers=new Headers();
        headers.append("Content-Type",'application/json');

        return this.http.post('http://localhost:6060/PlayPoker/changePassword',user)
            .map(response =>Response = response);

    }
	
	
	  deleteAccount(id: number){
        // return this.http.delete(this.deleteUrl+id, {headers: this.headers})
        //     .toPromise()
        //     .then(() => null)
        //     .catch(this.handleError);

        var json={
            "userId":id,
        };
        console.log("json--->"+json);

        var headers=new Headers();
        headers.append("Content-Type",'application/json');

        return this.http.post('http://localhost:6060/PlayPoker/deleteAccount',{headers: headers},id)
            .map(response =>Response = response);
    }
}