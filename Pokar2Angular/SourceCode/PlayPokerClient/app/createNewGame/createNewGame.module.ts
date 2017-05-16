/**
 * Created by uvats on 1/17/2017.
 */
import { NgModule }      from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import {CreateNewGameRoutingModule} from './createNewGame-routing.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CreateNewGameRoutingModule
  ]
})
export class CreateNewGameModule { }
