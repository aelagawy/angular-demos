import { heroSwitchComponents } from './official/_1.components-and-templates/_2.template-syntax/hero-switch.components';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { __MaterialDesignDemoModule } from './material-design-demo/__material-design-demo.module';
import { __DisplayingDataModule } from './official/_1.components-and-templates/_1.displaying-data/__displaying-data.module';
import { __TemplateSyntaxModule } from './official/_1.components-and-templates/_2.template-syntax/__template-syntax.module';
import { __UserInputModule } from './official/_1.components-and-templates/_3.user-input/__user-input.module';
import { __LifecycleHooksModule } from './official/_1.components-and-templates/_4.lifecycle-hooks/__lifecycle-hooks.module';
import { __ComponentInteractionModule } from './official/_1.components-and-templates/_5.component-interaction/__component-interaction.module';
import { __ComponentStylesModule } from './official/_1.components-and-templates/_6.component-styles/__component-styles.module';
import { __AngularElementsModule } from './official/_1.components-and-templates/_7.angular-elements/__angular-elements.module';
import { __DynamicComponentsModule } from './official/_1.components-and-templates/_8.dynamic-components/__dynamic-components.module';
import { __AttributeDirectivesModule } from './official/_1.components-and-templates/_9.attribute-directives/__attribute-directives.module';
import { __StructuralDirectivesModule } from './official/_1.components-and-templates/_10.structural-directives/__structural-directives.module';
import { __PipesModule } from './official/_1.components-and-templates/_11.pipes/__pipes.module';
import { __ReactiveFormsModule } from './official/_2.forms/_1.reactive-forms/__reactive-forms.module';
import { __TDFormsModule } from './official/_2.forms/_2.td-forms/__td-forms.module';
import { __FormValidationModule } from './official/_2.forms/_3.form-validation/__form-validation.module';
import { __DynamicFormsModule } from './official/_2.forms/_4.dynamic-forms/__dynamic-forms.module';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { InMemoryDataService } from './tour-of-heroes/_shared/in-memory-data.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './_root/app.component';

import { TsProgrammingDemoComponent } from './ts-programming-demo/ts-programming-demo.component';
import { HeroesComponent } from './tour-of-heroes/heroes/heroes.component';
import { HeroDetailComponent } from './tour-of-heroes/hero-detail/hero-detail.component';
import { MessagesComponent } from './tour-of-heroes/messages/messages.component';
import { DashboardComponent } from './tour-of-heroes/dashboard/dashboard.component';
import { HeroSearchComponent } from './tour-of-heroes/hero-search/hero-search.component';
import { TourOfHeroesDemoComponent } from './tour-of-heroes/tour-of-heroes-demo/tour-of-heroes-demo.component';
import { OfficialDemosComponent } from './official/_official-demos.component';

  @NgModule({
  declarations: [
    AppComponent,
    OfficialDemosComponent,
    TsProgrammingDemoComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    TourOfHeroesDemoComponent,
    heroSwitchComponents
  ],
  entryComponents:[
    // PopupComponent,
    // HeroProfileComponent,
    // HeroJobAdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    BrowserAnimationsModule,
    __MaterialDesignDemoModule,
    __DisplayingDataModule,
    __TemplateSyntaxModule,
    __UserInputModule,
    __LifecycleHooksModule,
    __ComponentInteractionModule,
    __ComponentStylesModule,
    __AngularElementsModule,
    __DynamicComponentsModule,
    __AttributeDirectivesModule,
    __StructuralDirectivesModule,
    __PipesModule,
    __ReactiveFormsModule,
    __TDFormsModule,
    __FormValidationModule,
    __DynamicFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }