import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User } from '../_models/index';
import {LoginRes} from "../_models/LoginRes";
import {UserRes} from "../_models/UserRes";
import {Observable} from "rxjs/Rx";

@Injectable()
export class UserService {
    constructor(private http: Http) { }

    getAll() {
        return this.http.get('/api/users', this.jwt()).map((response: Response) => response.json());
    }

    getById(id: number) {
        return this.http.get('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    }

    create(user: User) : Observable<any>{
        /*return this.http.post('/api/users', user, this.jwt()).map((response: Response) => response.json());*/

       // var json={user};
        var headers=new Headers();
        //headers.append("Content-Type",'application/x-www-form-urlencoded');
        headers.append("Content-Type",'application/json');
        var json={
            "firstName":user.firstName,
            "lastName":user.lastName,
            "playerName":user.playername,
            "email":user.email,
            "password":user.password
        }

        return this.http.post('http://localhost:6060/PlayPoker/create',json).map(res=> <LoginRes>res.json());
    }

    update(user: User) {
        return this.http.put('/api/users/' + user.id, user, this.jwt()).map((response: Response) => response.json());
    }

    delete(id: number) {
        return this.http.delete('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    }

    // private helper methods

    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}