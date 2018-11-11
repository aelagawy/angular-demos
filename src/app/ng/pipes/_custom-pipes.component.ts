import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-pipes',
  templateUrl: './_custom-pipes.component.html'
})
export class CustomPipesComponent {
  birthday = new Date(1988, 3, 15); // April 15, 1988
}
