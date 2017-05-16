import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import {GamePlayerRes} from "../_models/GamePlayerRes";
import { Router, RouterOutlet } from "@angular/router";

@Injectable()
export class PlayerLoginService {

    constructor(private http: Http) { }

    playerLogin(name: string, email: string, guid: string):Observable<any>{

        console.log("Welcome PlayerLoginService playerLogin " + guid);
        var json={"name": name, "email": email,"guid": guid};
        var headers=new Headers();
        headers.append("Content-Type",'application/json');
        return this.http.post('http://localhost:6060/PlayPoker/playerLogin',json).map(res=> <GamePlayerRes>res.json());
    }
}