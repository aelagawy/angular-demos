import { Component, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Hero } from './hero.model';

@Component({
  selector: 'app-hero-form',
  template: `
    <div id="heroForm">
    <form (ngSubmit)="onSubmit(heroForm)" #heroForm="ngForm">
      <div class="form-group">
        <label for="name">Name
          <input class="form-control" name="name" required [(ngModel)]="hero.name">
        </label>
      </div>
      <button type="submit" [disabled]="!heroForm.form.valid">Submit</button>
    </form>
    <div [hidden]="!heroForm.form.valid">
      {{submitMessage}}
    </div>
  </div>
  `,
  styles: [`
    button { margin: 6px 0; }
    #heroForm { border: 1px solid black; margin: 20px 0; padding: 8px; max-width: 350px; }
  `]
})
export class HeroFormComponent {
  @Input() hero: Hero;
  @ViewChild('heroForm') form: NgForm;

  private _submitMessage = '';

  get submitMessage() {
    if (!this.form.valid) {
      this._submitMessage = '';
    }
    return this._submitMessage;
  }

  onSubmit(form: NgForm) {
    this._submitMessage =  'Submitted. form value is ' + JSON.stringify(form.value);
  }
}
