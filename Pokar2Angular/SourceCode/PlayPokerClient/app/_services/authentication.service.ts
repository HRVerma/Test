import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import {LoginRes} from "../_models/LoginRes";

@Injectable()
export class AuthenticationService {

    constructor(private http: Http) { }

    login(email: string, password: string):Observable<any>{


        /*return this.http.get('http://localhost:8080/movieService/')
         .map(res=> <LoginRes>res.json())*/
        //var json=JSON.stringify({username: username,password : password});

        // var params='json='+json;
        var json={"userName": email,"password" : password};
        var headers=new Headers();
        //headers.append("Content-Type",'application/x-www-form-urlencoded');
        headers.append("Content-Type",'application/json');
        return this.http.post('http://localhost:6060/PlayPoker/login',json).map(res=> <LoginRes>res.json());


    }

    logout() {
        // remove user from local storage to log user out
        /* localStorage.removeItem('currentUser');*/
    }
}