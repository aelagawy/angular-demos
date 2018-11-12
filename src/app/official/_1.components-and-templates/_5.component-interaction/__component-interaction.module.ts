import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentInteractionComponent } from './_component-interaction.component';
import { CountdownTimerComponent } from './countdown-timer.component';
import { CountdownLocalVarParentComponent, CountdownViewChildParentComponent } from './countdown.component';
import { HeroParentComponent, HeroChildComponent } from './hero.component';
import { MissionControlComponent, AstronautComponent } from './mission.component';
import { NameParentComponent, NameChildComponent } from './name.component';
import { VersionParentComponent, VersionChildComponent } from './version.component';
import { VoteTakerComponent, VoterComponent } from './vote.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ComponentInteractionComponent,
    CountdownTimerComponent,
    CountdownLocalVarParentComponent,
    CountdownViewChildParentComponent,
    HeroParentComponent,
    HeroChildComponent,
    MissionControlComponent,
    AstronautComponent,
    NameParentComponent,
    NameChildComponent,
    VersionParentComponent,
    VersionChildComponent,
    VoteTakerComponent,
    VoterComponent
  ]
})
export class __ComponentInteractionModule { }
