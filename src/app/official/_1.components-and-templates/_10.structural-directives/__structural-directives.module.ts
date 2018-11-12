import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StructuralDirectiveComponent } from './_structural-directive.component';
//import { heroSwitchComponents } from '../_2.template-syntax/hero-switch.components';
import { UnlessDirective } from './unless.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    StructuralDirectiveComponent,
 //   heroSwitchComponents,
    UnlessDirective
  ]
})
export class __StructuralDirectivesModule { }
