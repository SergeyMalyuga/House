import {Directive, EventEmitter, HostBinding, HostListener, Input, Output} from '@angular/core';
import {ACTIVE_COUNTRY_CLASS, CountryEn} from '../../../core/constants/consts';

@Directive({
  selector: '[appSelectCity]',
})
export class SelectCityDirective {
  @Output() citySelected = new EventEmitter<CountryEn>();
  @Input({required: true}) currentCity!: CountryEn;
  @Input({required: true}) city!: CountryEn;

  @HostBinding('class')
  get isSelected() {
    return {
      [ACTIVE_COUNTRY_CLASS]: this.currentCity === this.city
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
