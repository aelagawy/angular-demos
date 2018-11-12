import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormValidationComponent } from './_form-validation.component';
import { HeroReactiveFormComponent } from './reactive/hero-reactive-form.component';
import { UniqueAlterEgoValidatorDirective } from './shared/alter-ego.directive';
import { ForbiddenValidatorDirective } from './shared/forbidden-name.directive';
import { IdentityRevealedValidatorDirective } from './shared/identity-revealed.directive';
import { HeroTDFormComponent } from './td-forms/hero-td-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FormValidationComponent,
    HeroReactiveFormComponent,
    UniqueAlterEgoValidatorDirective,
    ForbiddenValidatorDirective,
    IdentityRevealedValidatorDirective,
    HeroTDFormComponent
  ]
})
export class __FormValidationModule { }
