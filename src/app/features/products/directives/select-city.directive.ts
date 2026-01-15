import {Directive, EventEmitter, HostBinding, HostListener, Input, Output} from '@angular/core';
import {ACTIVE_COUNTRY_CLASS, CountryRu} from '../../../core/constants/consts';

@Directive({
  selector: '[appSelectCity]',
})
export class SelectCityDirective {
  @Output() citySelected = new EventEmitter<CountryRu>();
  @Input({required: true}) currentCity!: CountryRu;
  @Input({required: true}) city!: CountryRu;

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
