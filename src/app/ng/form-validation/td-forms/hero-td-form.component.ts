/* tslint:disable: member-ordering */
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-td-form',
  templateUrl: './hero-td-form.component.html',
  styles: ['.cross-validation-error input { border-left: 5px solid red;}'],
})
export class HeroTDFormComponent {

  powers = ['Really Smart', 'Super Flexible', 'Weather Changer'];
  hero = {name: 'Dr.', alterEgo: 'Dr. What', power: this.powers[0]};

}
