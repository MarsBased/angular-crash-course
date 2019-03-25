import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({ selector: '[appColor]' })
export class ColorDirective {
  @Input()
  color = 'green';

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = this.color;
    this.el.nativeElement.style.display = 'block';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = 'white';
  }
}
