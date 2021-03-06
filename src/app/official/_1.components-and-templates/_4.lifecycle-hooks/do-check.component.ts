/* tslint:disable:forin */
import { Component, DoCheck, Input, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

class Hero {
  constructor(public name: string) {}
}

@Component({
  selector: 'do-check',
  template: `
  <div #parentContainer></div>
  <br>
  <div class="hero">
    <p>{{hero.name}} can {{power}}</p>

    <h4>-- Change Log --</h4>
    <div *ngFor="let chg of changeLog">{{chg}}</div>
  </div>
  `,
  styles: [
    '.hero {background: LightYellow; padding: 8px; margin-top: 8px}',
    'p {background: Yellow; padding: 8px; margin-top: 8px}'
  ]
})
export class DoCheckComponent implements DoCheck {
  @Input() hero: Hero;
  @Input() power: string;

  changeDetected = false;
  changeLog: string[] = [];
  oldHeroName = '';
  oldPower = '';
  oldLogLength = 0;
  noChangeCount = 0;

  ngDoCheck() {

    if (this.hero.name !== this.oldHeroName) {
      this.changeDetected = true;
      this.changeLog.push(`DoCheck: Hero name changed to "${this.hero.name}" from "${this.oldHeroName}"`);
      this.oldHeroName = this.hero.name;
    }

    if (this.power !== this.oldPower) {
      this.changeDetected = true;
      this.changeLog.push(`DoCheck: Power changed to "${this.power}" from "${this.oldPower}"`);
      this.oldPower = this.power;
    }

    if (this.changeDetected) {
        this.noChangeCount = 0;
    } else {
        // log that hook was called when there was no relevant change.
        let count = this.noChangeCount += 1;
        let noChangeMsg = `DoCheck called ${count}x when no change to hero or power`;
        if (count === 1) {
          // add new "no change" message
          this.changeLog.push(noChangeMsg);
        } else {
          // update last "no change" message
          this.changeLog[this.changeLog.length - 1] = noChangeMsg;
        }
    }

    this.changeDetected = false;
  }

  reset() {
    this.changeDetected = true;
    this.changeLog = [];
  }


//   @ViewChild('parentContainer', { read: ViewContainerRef }) parentContainer: ViewContainerRef;
//  constructor(private route: ActivatedRoute,
//   private _componentFactoryResolver: ComponentFactoryResolver){

// }

//   ngOnInit(){
//     this.route.data
//         .subscribe(data => {
//            if(!!data && !!data.parent){
//              data.parent.map(p => {
//                let componentFactory = this._componentFactoryResolver.resolveComponentFactory(p);
//                console.log(componentFactory)
//                this.parentContainer.createComponent(componentFactory);
//              });
//            }
//         });
//   }
}

@Component({
  selector: 'do-check-parent',
  template:`
  <div class="parent">
  <h2>{{title}}</h2>

  <table>
    <tr><td>Power: </td><td><input [(ngModel)]="power"></td></tr>
    <tr><td>Hero.name: </td><td><input [(ngModel)]="hero.name"></td></tr>
  </table>
  <p><button (click)="reset()">Reset Log</button></p>

  <do-check [hero]="hero" [power]="power"></do-check>
</div>
  ` ,
  styles: ['.parent {background: Lavender}']
})
export class DoCheckParentComponent {
  hero: Hero;
  power: string;
  title = 'DoCheck';
  @ViewChild(DoCheckComponent) childView: DoCheckComponent;

  constructor() { this.reset(); }

  reset() {
    this.hero = new Hero('Windstorm');
    this.power = 'sing';
    if (this.childView) { this.childView.reset(); }
  }
}
