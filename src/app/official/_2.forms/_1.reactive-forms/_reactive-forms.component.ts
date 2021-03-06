import { Component } from '@angular/core';

export type EditorType = 'name' | 'profile';

@Component({
  selector: 'app-reactive-forms',
  template: `
  <h1>Reactive Forms</h1>

<nav>
  <a class="btn" (click)="toggleEditor('name')">Name Editor</a> | 
  <a class="btn" (click)="toggleEditor('profile')">Profile Editor</a>
</nav>

<app-name-editor *ngIf="showNameEditor"></app-name-editor>
<app-profile-editor *ngIf="showProfileEditor"></app-profile-editor>
  `
})
export class ReactiveFormsComponent {
  editor: EditorType = 'name';

  get showNameEditor() {
    return this.editor === 'name';
  }

  get showProfileEditor() {
    return this.editor === 'profile';
  }

  toggleEditor(type: EditorType) {
    this.editor = type;
  }
}
