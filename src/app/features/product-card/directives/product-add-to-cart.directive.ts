import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appProductAddToCart]',
})
export class ProductAddToCartDirective {
  @Output() productAdded = new EventEmitter<void>();

  @HostListener('click')
  addProduct() {
    this.productAdded.emit();
  }
}
