import {Directive, EventEmitter, HostListener, inject, Output} from '@angular/core';
import {BodyService} from '../../../core/services/body.sevice';

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



