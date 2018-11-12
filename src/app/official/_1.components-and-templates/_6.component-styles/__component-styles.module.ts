import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentStylesComponent } from './_component-styles.component';
import { HeroAppMainComponent } from './hero-app-main.component';
import { HeroControlsComponent } from './hero-controls.component';
import { HeroDetailsComponent } from './hero-details.component';
import { HeroTeamComponent } from './hero-team.component';
import { QuestSummaryComponent } from './quest-summary.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ComponentStylesComponent,
    HeroAppMainComponent,
    HeroControlsComponent,
    HeroDetailsComponent,
    HeroTeamComponent,
    QuestSummaryComponent
  ]
})
export class __ComponentStylesModule { }
