import { BrowserModule }                        from '@angular/platform-browser';
import { NgModule }                             from '@angular/core';
import { FormsModule }                          from '@angular/forms';
import { HttpClientModule }                     from '@angular/common/http';
import { BrowserAnimationsModule }              from '@angular/platform-browser/animations';
import { 
  MatButtonModule,
  MatCheckboxModule, 
  MatSidenavModule, 
  MatToolbarModule,
  MatIconModule,
  MatListModule }                               from '@angular/material';
import { MatMenuModule }                        from '@angular/material/menu';
import { MatTabsModule }                        from '@angular/material/tabs';

import { HttpClientInMemoryWebApiModule }       from 'angular-in-memory-web-api';
import { InMemoryDataService }                  from './tour-of-heroes/_shared/in-memory-data.service';
import { AppRoutingModule }                     from './app-routing.module';
import { AppComponent }                         from './_root/app.component';
import { TsProgrammingDemoComponent }           from './ts-programming-demo/ts-programming-demo.component';
import { MaterialDesignDemoComponent }          from './material-design-demo/material-design-demo.component';
import { HeroesComponent }                      from './tour-of-heroes/heroes/heroes.component';
import { HeroDetailComponent }                  from './tour-of-heroes/hero-detail/hero-detail.component';
import { MessagesComponent }                    from './tour-of-heroes/messages/messages.component';
import { DashboardComponent }                   from './tour-of-heroes/dashboard/dashboard.component';
import { HeroSearchComponent }                  from './tour-of-heroes/hero-search/hero-search.component';
import { TourOfHeroesDemoComponent }            from './tour-of-heroes/tour-of-heroes-demo/tour-of-heroes-demo.component';

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
    TourOfHeroesDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
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
