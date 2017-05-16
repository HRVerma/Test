/**
 * Created by SDagar on 2/1/2017.
 */
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import {PlayerLoginRes} from "../_models/GamePlayerRes";
import { Router, RouterOutlet } from "@angular/router";

@Injectable()
export class JoinGameService {}