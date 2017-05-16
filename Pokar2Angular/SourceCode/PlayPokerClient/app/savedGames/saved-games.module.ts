/**
 * Created by uvats on 1/18/2017.
 */
import { NgModule }      from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import {SavedGemesRoutingModule} from './saved-games-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SavedGemesRoutingModule
  ]

})
export class SavedGamesModule { }
