import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularElementsComponent } from './_angular-elements.component';
import { PopupComponent, PopupParentComponent } from './popup.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AngularElementsComponent,
  //  PopupComponent,
  //  PopupParentComponent
  ],
  entryComponents:[
  //  PopupComponent
  ]
})
export class __AngularElementsModule { }
