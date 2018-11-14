import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomPipesComponent } from './_custom-pipes.component';
import { ExponentialStrengthPipe, FlyingHeroesPipe, FlyingHeroesImpurePipe, FetchJsonPipe } from './custom.pipe';
import { HeroBirthday1Component, HeroBirthday2Component, HeroAsyncMessageComponent, HeroListComponent } from './hero.component';
import { PowerBoosterComponent, PowerBoostCalculatorComponent } from './power-boost.component';
import { FlyingHeroesComponent, FlyingHeroesImpureComponent } from './flying-heroes.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    CustomPipesComponent,
    ExponentialStrengthPipe,
    FlyingHeroesPipe,
    FlyingHeroesImpurePipe,
    FetchJsonPipe,
    HeroBirthday1Component,
    HeroBirthday2Component,
    PowerBoosterComponent,
    PowerBoostCalculatorComponent,
    FlyingHeroesComponent,
    FlyingHeroesImpureComponent,
    HeroAsyncMessageComponent,
    HeroListComponent
  ]
})
export class __PipesModule { }
