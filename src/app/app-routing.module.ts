import { NgModule }                   from '@angular/core';
import { RouterModule, Routes }       from '@angular/router';

import { TsProgrammingDemoComponent } from './ts-programming-demo/ts-programming-demo.component';
import { TourOfHeroesDemoComponent }  from './tour-of-heroes/tour-of-heroes-demo/tour-of-heroes-demo.component';
import { DashboardComponent }         from './tour-of-heroes/dashboard/dashboard.component';
import { HeroesComponent }            from './tour-of-heroes/heroes/heroes.component';
import { HeroDetailComponent }        from './tour-of-heroes/hero-detail/hero-detail.component';
 
const routes: Routes = [
  //{ path: '', redirectTo: '/ts-programming-demo', pathMatch: 'full' },

  { path: 'ts-programming-demo', component: TsProgrammingDemoComponent },
  { path: 'tour-of-heroes-demo', component: TourOfHeroesDemoComponent ,children: [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'detail/:id', component: HeroDetailComponent },
    { path: 'heroes', component: HeroesComponent }]}
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}