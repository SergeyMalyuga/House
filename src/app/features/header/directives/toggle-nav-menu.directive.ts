import {Directive, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[appToggleNavMenu]'
})
export class ToggleNavMenuDirective {
  @Output() navMenuToggled = new EventEmitter<void>();

  @HostListener('click')
  toggleNavMenu() {
    this.navMenuToggled.emit();
  }
}



