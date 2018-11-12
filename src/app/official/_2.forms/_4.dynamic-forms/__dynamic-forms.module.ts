import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicFormsComponent } from './_dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question.component';
import { DynamicFormComponent } from './dynamic-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DynamicFormsComponent,
    DynamicFormQuestionComponent,
    DynamicFormComponent
  ]
})
export class __DynamicFormsModule { }
