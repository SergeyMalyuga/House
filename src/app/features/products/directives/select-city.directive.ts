import {Directive, EventEmitter, HostBinding, HostListener, Input, Output} from '@angular/core';
import {ACTIVE_CITY_CLASS, City} from '../../../core/constants/consts';

@Directive({
  selector: '[appSelectCity]',
})
export class SelectCityDirective {
  @Output() citySelected = new EventEmitter<City>();
  @Input({required: true}) currentCity!: City;
  @Input({required: true}) city!: City;

  @HostBinding('class')
  get isSelected() {
    return {
      [ACTIVE_CITY_CLASS]: this.currentCity === this.city
    }
  }

  @HostBinding('attr.aria-pressed')
  get isPressed() {
    return this.currentCity === this.city
  }

  @HostListener('click')
  selectCity() {
    this.citySelected.emit(this.city);
  }
}
