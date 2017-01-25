import {Directive, ElementRef, Renderer, HostListener, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @HostListener('mouseover') mouseover() {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave() {
    this.backgroundColor =this.defaultColor;
  }

  @HostBinding('style.backgroundColor') get setColor() {
    return this.backgroundColor;
  }

  @HostListener('click', ['$event'])
    onClick(event) {
    console.log("Event Target" + event.target);
  }

  @Input() defaultColor = 'white';
  @Input('highlight') highlightColor = 'green';


  private backgroundColor = this.defaultColor;

  constructor(private elementRef: ElementRef, private renderer: Renderer) {
    //this.elementRef.nativeElement.style.backgroundColor='green';
    this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color',
    'green');
  }



}
