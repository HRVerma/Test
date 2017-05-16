/**
 * Created by uvats on 1/17/2017.
 */

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({

  selector: 'my-create',
  template: `
              <div>
              <h2>{{title}}</h2>
              </div>
              <button (click)="cancel()">CANCEL</button>       
              <router-outlet></router-outlet>
`
})

export class CreateNewGameComponent  {
  title = 'Create New Game';
  private router: Router;
  private location: Location;
  constructor(router: Router, location:Location){
    this.router=router;
    this.location=location;
  }
  cancel(): void {
    this.location.back();
  }
}
