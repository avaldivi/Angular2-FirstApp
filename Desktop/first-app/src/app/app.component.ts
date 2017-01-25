import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1> Root Component </h1>
    <fa-other> </fa-other>
    <fa-another> </fa-another>
    <fa-databinding> </fa-databinding>
    <fa-lifecyle></fa-lifecyle>
    <fa-directives></fa-directives>
`,
  styles: [` 
     h1 {
         color:red;
        }
`   ]
})
export class AppComponent {
  title = 'app works!';
}
