import { Directive, HostListener, ElementRef, Renderer2, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appScrollListener]'
})
export class ScrollListenerDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @Output() scrolled = new EventEmitter();

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    this.scrolled.emit();
  }
}