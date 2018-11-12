import { ComponentStylesComponent } from './official/_1.components-and-templates/_6.component-styles/_component-styles.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TsProgrammingDemoComponent } from './ts-programming-demo/ts-programming-demo.component';
import { TourOfHeroesDemoComponent } from './tour-of-heroes/tour-of-heroes-demo/tour-of-heroes-demo.component';
import { DashboardComponent } from './tour-of-heroes/dashboard/dashboard.component';
import { HeroesComponent } from './tour-of-heroes/heroes/heroes.component';
import { HeroDetailComponent } from './tour-of-heroes/hero-detail/hero-detail.component';
import { DisplayingDataComponent } from './official/_1.components-and-templates/_1.displaying-data/_displaying-data.component';
import { TemplateSyntaxComponent } from './official/_1.components-and-templates/_2.template-syntax/_template-syntax.component';
import { UserInputComponent } from './official/_1.components-and-templates/_3.user-input/_user-input.component';
import { ClickMeComponent } from './official/_1.components-and-templates/_3.user-input/click-me.component';
import { KeyUpComponent_v1, KeyUpComponent_v2, KeyUpComponent_v3, KeyUpComponent_v4 } from './official/_1.components-and-templates/_3.user-input/key-up.component';
import { LittleTourComponent } from './official/_1.components-and-templates/_3.user-input/loop-back.component';
import { LoopbackComponent } from './official/_1.components-and-templates/_3.user-input/little-tour.component';
import { LifeCycleHooksComponent } from './official/_1.components-and-templates/_4.lifecycle-hooks/_lifecycle-hooks.component';
import { PeekABooComponent } from './official/_1.components-and-templates/_4.lifecycle-hooks/peek-a-boo.component';
import { DoCheckParentComponent } from './official/_1.components-and-templates/_4.lifecycle-hooks/do-check.component';
import { OnChangesParentComponent } from './official/_1.components-and-templates/_4.lifecycle-hooks/on-changes.component';
import { AfterViewParentComponent } from './official/_1.components-and-templates/_4.lifecycle-hooks/after-view.component';
import { AfterContentParentComponent } from './official/_1.components-and-templates/_4.lifecycle-hooks/after-content.component';
import { SpyParentComponent } from './official/_1.components-and-templates/_4.lifecycle-hooks/spy.component';
import { CounterParentComponent } from './official/_1.components-and-templates/_4.lifecycle-hooks/counter.component';
import { ComponentInteractionComponent } from './official/_1.components-and-templates/_5.component-interaction/_component-interaction.component';
import { HeroParentComponent } from './official/_1.components-and-templates/_5.component-interaction/hero.component';
import { NameParentComponent } from './official/_1.components-and-templates/_5.component-interaction/name.component';
import { VersionParentComponent } from './official/_1.components-and-templates/_5.component-interaction/version.component';
import { VoteTakerComponent } from './official/_1.components-and-templates/_5.component-interaction/vote.component';
import { CountdownLocalVarParentComponent, CountdownViewChildParentComponent } from './official/_1.components-and-templates/_5.component-interaction/countdown.component';
import { MissionControlComponent } from './official/_1.components-and-templates/_5.component-interaction/mission.component';
import { AttributeDirectiveComponent } from './official/_1.components-and-templates/_9.attribute-directives/_attribute-directive.component';
import { StructuralDirectiveComponent } from './official/_1.components-and-templates/_10.structural-directives/_structural-directive.component';
import { FormValidationComponent } from './official/_2.forms/_3.form-validation/_form-validation.component';
import { DynamicFormsComponent } from './official/_2.forms/_4.dynamic-forms/_dynamic-form.component';
import { OfficialDemosComponent } from './official/_official-demos.component';



 
const routes: Routes = [
  //{ path: '', redirectTo: '/ts-programming-demo', pathMatch: 'full' },

  { path: 'ts-programming-demo', component: TsProgrammingDemoComponent },
  { path: 'tour-of-heroes-demo', component: TourOfHeroesDemoComponent ,children: [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'detail/:id', component: HeroDetailComponent },
    { path: 'heroes', component: HeroesComponent }
  ]},
  { path: 'official', component: OfficialDemosComponent ,children: [
    { path: '_1.displaying-data', component: DisplayingDataComponent },
    { path: '_2.template-syntax', component: TemplateSyntaxComponent },
    { path: '_3.user-input', component: UserInputComponent, children: [
      { path: 'click-me', component: ClickMeComponent },
      { path: 'key-up-1', component: KeyUpComponent_v1 },
      { path: 'key-up-2', component: KeyUpComponent_v2 },
      { path: 'key-up-3', component: KeyUpComponent_v3 },
      { path: 'key-up-4', component: KeyUpComponent_v4 },
      { path: 'little-tour', component: LittleTourComponent },
      { path: 'loop-back', component: LoopbackComponent }]},
    { path: '_4.lifecycle-hooks', component: LifeCycleHooksComponent, children: [
      { path: 'peek-a-boo', component: PeekABooComponent },
      { path: 'do-check', component: DoCheckParentComponent },
      { path: 'on-changes', component: OnChangesParentComponent },
      { path: 'after-view', component: AfterViewParentComponent },
      { path: 'after-content', component: AfterContentParentComponent },
      { path: 'spy', component: SpyParentComponent },
      { path: 'counter', component: CounterParentComponent }]},
    { path: '_5.component-interaction', component: ComponentInteractionComponent, children: [
      { path: 'parent-to-child', component: HeroParentComponent },
      { path: 'parent-to-child-setter', component: NameParentComponent },
      { path: 'parent-to-child-on-changes', component: VersionParentComponent },
      { path: 'child-to-parent', component:  VoteTakerComponent},
      { path: 'parent-to-child-local-var', component: CountdownLocalVarParentComponent },
      { path: 'parent-to-view-child', component: CountdownViewChildParentComponent },
      { path: 'bidirectional-service', component: MissionControlComponent }]},
    { path: '_6.component-styles', component: ComponentStylesComponent },    
    //{ path: 'pop-up', component: PopupParentComponent },
    //{ path: 'ads', component: AdBannerParentComponent },
    { path: 'attribute-directives', component: AttributeDirectiveComponent },
    { path: 'structural-directives', component: StructuralDirectiveComponent },
    { path: 'form-validation', component: FormValidationComponent },
    { path: 'dynamic-forms', component: DynamicFormsComponent },
  ]}
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

///ng//do-check
