import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  private elementRef = inject(ElementRef);
  constructor() {
    this.elementRef.nativeElement.style.backgroundColor = 'orange';
  }
}
