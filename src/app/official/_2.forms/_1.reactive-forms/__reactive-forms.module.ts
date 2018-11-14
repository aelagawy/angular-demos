import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { ReactiveFormsComponent } from './_reactive-forms.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    ReactiveFormsComponent,
    NameEditorComponent,
    ProfileEditorComponent
  ]
})
export class __ReactiveFormsModule { }
