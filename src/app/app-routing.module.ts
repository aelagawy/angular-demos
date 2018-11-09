import { NgComponent } from './ng/ng.component';
import { LoopbackComponent } from './ng/little-tour.component';
import { LittleTourComponent } from './ng/loop-back.component';
import { 
  KeyUpComponent_v1, 
  KeyUpComponent_v2, 
  KeyUpComponent_v3, 
  KeyUpComponent_v4 
} from './ng/key-up.component';
import { ClickMeComponent } from './ng/click-me.component';
import { NgModule }                   from '@angular/core';
import { RouterModule, Routes }       from '@angular/router';

import { TsProgrammingDemoComponent } from './ts-programming-demo/ts-programming-demo.component';
import { TourOfHeroesDemoComponent }  from './tour-of-heroes/tour-of-heroes-demo/tour-of-heroes-demo.component';
import { DashboardComponent }         from './tour-of-heroes/dashboard/dashboard.component';
import { HeroesComponent }            from './tour-of-heroes/heroes/heroes.component';
import { HeroDetailComponent }        from './tour-of-heroes/hero-detail/hero-detail.component';
import { LifeCycleHooksComponent }    from './ng/lifecycle-hooks/lifecycle-hooks.component';
import { PeekABooComponent } from './ng/lifecycle-hooks/peek-a-boo.component';
import { DoCheckComponent, DoCheckParentComponent } from './ng/lifecycle-hooks/do-check.component';
import { AfterViewParentComponent } from './ng/lifecycle-hooks/after-view.component';
import { OnChangesParentComponent } from './ng/lifecycle-hooks/on-changes.component';
import { AfterContentParentComponent } from './ng/lifecycle-hooks/after-content.component';
import { SpyParentComponent } from './ng/lifecycle-hooks/spy.component';
import { CounterParentComponent } from './ng/lifecycle-hooks/counter.component';
 
const routes: Routes = [
  //{ path: '', redirectTo: '/ts-programming-demo', pathMatch: 'full' },

  { path: 'ts-programming-demo', component: TsProgrammingDemoComponent },
  { path: 'tour-of-heroes-demo', component: TourOfHeroesDemoComponent ,children: [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'detail/:id', component: HeroDetailComponent },
    { path: 'heroes', component: HeroesComponent }
  ]},
  { path: 'ng', component: NgComponent ,children: [
    { path: 'click-me', component: ClickMeComponent },
    { path: 'key-up-1', component: KeyUpComponent_v1 },
    { path: 'key-up-2', component: KeyUpComponent_v2 },
    { path: 'key-up-3', component: KeyUpComponent_v3 },
    { path: 'key-up-4', component: KeyUpComponent_v4 },
    { path: 'little-tour', component: LittleTourComponent },
    { path: 'loop-back', component: LoopbackComponent },
    { path: 'lifecycle-hooks', component: LifeCycleHooksComponent, children: [
      { path: 'peek-a-boo', component: PeekABooComponent },
      { path: 'do-check', component: DoCheckParentComponent },
      { path: 'on-changes', component: OnChangesParentComponent },
      { path: 'after-view', component: AfterViewParentComponent },
      { path: 'after-content', component: AfterContentParentComponent },
      { path: 'spy', component: SpyParentComponent },
      { path: 'counter', component: CounterParentComponent },
      // { path: 'peek-a-boo', component: PeekABooComponent },
    ]}
  ]}
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

///ng//do-check