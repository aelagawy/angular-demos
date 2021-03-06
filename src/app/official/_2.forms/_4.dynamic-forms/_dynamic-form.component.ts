import { Component }       from '@angular/core';

import { QuestionService } from './question.service';

@Component({
  selector: 'app-dynamic-forms',
  template: `
    <div>
      <h2>Job Application for Heroes</h2>
      <app-dynamic-form [questions]="questions"></app-dynamic-form>
    </div>
  `,
  providers:  [QuestionService]
})
export class DynamicFormsComponent {
  questions: any[];

  constructor(service: QuestionService) {
    this.questions = service.getQuestions();
  }
}
