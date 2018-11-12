import { Component, OnInit } from '@angular/core';

import { AdService } from './ad.service';
import { AdItem } from './ad-item';

@Component({
  template: `
    <div>
      <app-ad-banner [ads]="ads"></app-ad-banner>
    </div>
  `
})
export class DynamicComponentsComponent implements OnInit {
  ads: AdItem[];

  constructor(private adService: AdService) {}

  ngOnInit() {
    this.ads = this.adService.getAds();
  }
}

