import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({ selector: '[appClick]' })
export class ClickDirective {
  @HostListener('click') onMouseEnter() {
    alert('element clicked');
  }
}
