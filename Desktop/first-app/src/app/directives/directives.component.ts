import { Component } from '@angular/core';

@Component({
  selector: 'fa-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  private witch = true;

  private items = [1,2,3,4,5];

  private value = '100';

  onSwitch() {
    this.witch = !this.witch;
  }

}
