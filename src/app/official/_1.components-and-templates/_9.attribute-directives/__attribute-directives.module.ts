import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttributeDirectiveComponent } from './_attribute-directive.component';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AttributeDirectiveComponent,
    HighlightDirective
  ]
})
export class __AttributeDirectivesModule { }
