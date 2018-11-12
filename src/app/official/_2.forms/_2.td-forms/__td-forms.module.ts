import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TDFormsComponent } from './_td-forms.component';
import { HeroFormComponent } from './hero-form/hero-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TDFormsComponent,
    HeroFormComponent
  ]
})
export class __TDFormsModule { }
