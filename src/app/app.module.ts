import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule,MatCheckboxModule, MatSidenavModule, MatToolbarModule,MatIconModule,MatListModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { HeroFormComponent } from './ng/td-forms/hero-form/hero-form.component';
import { ProfileEditorComponent } from './ng/reactive-forms/profile-editor/profile-editor.component';
import { NameEditorComponent } from './ng/reactive-forms//name-editor/name-editor.component';
import { ReactiveFormComponent } from './ng/reactive-forms/reactive-form.component';
import { CustomPipesComponent } from './ng/pipes/_custom-pipes.component';
import { pipesHeroComponents } from './ng/pipes/hero.component';
import { heroSwitchComponents } from './ng/structural-directives/hero-switch.components';
import { InMemoryDataService } from './tour-of-heroes/_shared/in-memory-data.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './_root/app.component';
import { TsProgrammingDemoComponent } from './ts-programming-demo/ts-programming-demo.component';
import { MaterialDesignDemoComponent } from './material-design-demo/material-design-demo.component';
import { HeroesComponent } from './tour-of-heroes/heroes/heroes.component';
import { HeroDetailComponent } from './tour-of-heroes/hero-detail/hero-detail.component';
import { MessagesComponent } from './tour-of-heroes/messages/messages.component';
import { DashboardComponent } from './tour-of-heroes/dashboard/dashboard.component';
import { HeroSearchComponent } from './tour-of-heroes/hero-search/hero-search.component';
import { TourOfHeroesDemoComponent } from './tour-of-heroes/tour-of-heroes-demo/tour-of-heroes-demo.component';
import { ClickMeComponent } from './ng/click-me.component';
import { KeyUpComponent_v1, KeyUpComponent_v2, KeyUpComponent_v3, KeyUpComponent_v4 } from './ng/key-up.component';
import { LoopbackComponent } from './ng/little-tour.component';
import { LittleTourComponent } from './ng/loop-back.component';
import { NgComponent } from './ng/ng.component';
import { LifeCycleHooksComponent } from './ng/lifecycle-hooks/_lifecycle-hooks.component';
import { PeekABooComponent } from './ng/lifecycle-hooks/peek-a-boo.component';
import { DoCheckComponent, DoCheckParentComponent } from './ng/lifecycle-hooks/do-check.component';
import { OnChangesComponent, OnChangesParentComponent } from './ng/lifecycle-hooks/on-changes.component';
import { AfterViewComponent, AfterViewParentComponent, ChildViewComponent } from './ng/lifecycle-hooks/after-view.component';
import { AfterContentComponent, AfterContentParentComponent, ChildComponent } from './ng/lifecycle-hooks/after-content.component';
import { SpyParentComponent } from './ng/lifecycle-hooks/spy.component';
import { CounterParentComponent, MyCounterComponent } from './ng/lifecycle-hooks/counter.component';
import { MissionControlComponent, AstronautComponent } from './ng/component-interaction/mission.component';
import { CountdownLocalVarParentComponent, CountdownViewChildParentComponent } from './ng/component-interaction/countdown.component';
import { CountdownTimerComponent } from './ng/component-interaction/countdown-timer.component';
import { HeroParentComponent, HeroChildComponent } from './ng/component-interaction/hero.component';
import { NameParentComponent, NameChildComponent } from './ng/component-interaction/name.component';
import { VersionParentComponent, VersionChildComponent } from './ng/component-interaction/version.component';
import { VoteTakerComponent, VoterComponent } from './ng/component-interaction/vote.component';
import { ComponentInteractionComponent } from './ng/component-interaction/_component-interaction.component';
import { PopupComponent, PopupParentComponent } from './ng/pop-up/popup.component';
import { AdBannerComponent, AdBannerParentComponent } from './ng/ads/ad-banner.component';
import { HeroProfileComponent } from './ng/ads/hero-profile.component';
import { HeroJobAdComponent } from './ng/ads/hero-job-ad.component';
import { HighlightDirective } from './ng/attribute-directives/highlight.directive';
import { AttributeDirectiveComponent } from './ng/attribute-directives/_attribute-directive.component';
import { StructuralDirectiveComponent } from './ng/structural-directives/_structural-directive.component';
import { UnlessDirective } from './ng/structural-directives/unless.directive';
import { customPipes } from './ng/pipes/custom.pipe';
import { pipesPowerBoosterComponents } from './ng/pipes/power-boost.component';
import { pipesFlyingHeroesComponents } from './ng/pipes/flying-heroes.component';
import { TDFormComponent } from './ng/td-forms/td-form.component';
import { FormValidationComponent } from './ng/form-validation/form-validation.component';
import { HeroReactiveFormComponent } from './ng/form-validation/reactive/hero-reactive-form.component';
import { HeroTDFormComponent } from './ng/form-validation/td-forms/hero-td-form.component';
import { UniqueAlterEgoValidatorDirective } from './ng/form-validation/shared/alter-ego.directive';
import { ForbiddenValidatorDirective } from './ng/form-validation/shared/forbidden-name.directive';
import { IdentityRevealedValidatorDirective } from './ng/form-validation/shared/identity-revealed.directive';
import { DynamicFormsComponent } from './ng/dynamic-forms/_dynamic-form.component';
import { DynamicFormQuestionComponent } from './ng/dynamic-forms/dynamic-form-question.component';
import { DynamicFormComponent } from './ng/dynamic-forms/dynamic-form.component';
  
  @NgModule({
  declarations: [
    AppComponent,
    TsProgrammingDemoComponent,
    MaterialDesignDemoComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    TourOfHeroesDemoComponent,
    ClickMeComponent,
    KeyUpComponent_v1,
    KeyUpComponent_v2,
    KeyUpComponent_v3,
    KeyUpComponent_v4,
    LittleTourComponent,
    LoopbackComponent,
    NgComponent,
    LifeCycleHooksComponent,
    PeekABooComponent,
    DoCheckComponent,
    DoCheckParentComponent,
    OnChangesComponent,
    OnChangesParentComponent,
    AfterViewComponent,
    AfterViewParentComponent,
    ChildViewComponent,
    AfterContentComponent,
    AfterContentParentComponent,
    ChildComponent,
    SpyParentComponent,
    CounterParentComponent,
    MyCounterComponent, 
    ComponentInteractionComponent,
    MissionControlComponent, AstronautComponent, 
    CountdownLocalVarParentComponent, CountdownViewChildParentComponent,
    CountdownTimerComponent,
    HeroParentComponent, HeroChildComponent,
    NameParentComponent, NameChildComponent,
    VersionParentComponent, VersionChildComponent,
    VoteTakerComponent, VoterComponent,
    PopupComponent, PopupParentComponent,
    AdBannerParentComponent, AdBannerComponent,
    HeroProfileComponent, HeroJobAdComponent,
    AttributeDirectiveComponent, HighlightDirective,
    StructuralDirectiveComponent, heroSwitchComponents, UnlessDirective,
    customPipes, pipesPowerBoosterComponents, pipesHeroComponents, CustomPipesComponent, pipesFlyingHeroesComponents,
    ReactiveFormComponent, NameEditorComponent, ProfileEditorComponent,
    TDFormComponent, HeroFormComponent,
    FormValidationComponent, HeroReactiveFormComponent, HeroTDFormComponent, UniqueAlterEgoValidatorDirective, ForbiddenValidatorDirective, IdentityRevealedValidatorDirective,
    DynamicFormsComponent, DynamicFormQuestionComponent, DynamicFormComponent
  ],
  entryComponents:[
    PopupComponent,
    HeroProfileComponent,
    HeroJobAdComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }