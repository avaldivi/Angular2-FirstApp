import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fa-lifecyle',
  template: `
    <p>
      lifecyle Works!
    </p>
  `,
  styles: []
})
export class LifecyleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
