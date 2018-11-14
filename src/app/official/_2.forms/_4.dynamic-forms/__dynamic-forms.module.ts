import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicFormsComponent } from './_dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question.component';
import { DynamicFormComponent } from './dynamic-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    DynamicFormsComponent,
    DynamicFormQuestionComponent,
    DynamicFormComponent
  ]
})
export class __DynamicFormsModule { }
