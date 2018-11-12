import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DynamicComponentsComponent } from './_dynamic-components.component';
import { HeroJobAdComponent } from './hero-job-ad.component';
import { AdBannerComponent, AdBannerParentComponent } from './ad-banner.component';
import { HeroProfileComponent } from './hero-profile.component';
import { AdDirective } from './ad.directive';
import { AdService } from './ad.service';

@NgModule({
  imports: [ BrowserModule ],
  providers: [ AdService ],
  declarations: [ 
    DynamicComponentsComponent,
    AdBannerComponent,
    AdBannerParentComponent,
    HeroJobAdComponent,
    HeroProfileComponent,
    AdDirective
   ],
  entryComponents: [ 
    HeroJobAdComponent, 
    HeroProfileComponent
   ]
})
export class __DynamicComponentsModule {}

