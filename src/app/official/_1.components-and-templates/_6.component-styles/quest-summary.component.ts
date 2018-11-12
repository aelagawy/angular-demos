/* tslint:disable:no-unused-variable */
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-quest-summary',
  template: '<p>No quests in progress</p>',
  styles:  [`
    :host {
      display: block;
      background-color: green;
      color: white;
    }
  `]
})
export class QuestSummaryComponent { }
/*
  // warning: few browsers support shadow DOM encapsulation at this time
  encapsulation: ViewEncapsulation.Native
*/
