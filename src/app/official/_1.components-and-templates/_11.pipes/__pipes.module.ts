import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomPipesComponent } from './_custom-pipes.component';
import { ExponentialStrengthPipe, FlyingHeroesPipe, FlyingHeroesImpurePipe, FetchJsonPipe } from './custom.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CustomPipesComponent,
    ExponentialStrengthPipe,
    FlyingHeroesPipe,
    FlyingHeroesImpurePipe,
    FetchJsonPipe
  ]
})
export class __PipesModule { }
