import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SizerComponent } from './sizer.component';
import { heroSwitchComponents } from './hero-switch.components';
import { TemplateSyntaxComponent } from './_template-syntax.component';
import { HeroFormComponent } from './hero-form.component';
import { HeroDetailComponent, BigHeroDetailComponent } from './hero-detail.component';
import { ClickDirective, ClickDirective2 } from './click.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    TemplateSyntaxComponent,
    HeroFormComponent,
    HeroDetailComponent,
    BigHeroDetailComponent,
    heroSwitchComponents,
    SizerComponent,
    ClickDirective,
    ClickDirective2
  ]
})
export class __TemplateSyntaxModule { }
