import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserInputComponent } from './_user-input.component';
import { LittleTourComponent } from './loop-back.component';
import { ClickMeComponent } from './click-me.component';
import { LoopbackComponent } from './little-tour.component';
import { KeyUpComponent_v1, KeyUpComponent_v2, KeyUpComponent_v3, KeyUpComponent_v4 } from './key-up.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    UserInputComponent,
    ClickMeComponent,
    KeyUpComponent_v1,
    KeyUpComponent_v2,
    KeyUpComponent_v3,
    KeyUpComponent_v4,
    LittleTourComponent,
    LoopbackComponent
  ]
})
export class __UserInputModule { }
