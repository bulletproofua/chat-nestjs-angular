import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// ngrx
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { reducers } from "./reducers/index";
import { UserEffects } from './effects/user.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('user', reducers),
    EffectsModule.forFeature([UserEffects]),
  ],
  declarations: [],
  providers: []
})
export class UserModuleModule { }
