import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {City} from '../../core/constants/consts';
import {SelectCityDirective} from './directives/select-city.directive';

@Component({
  selector: 'app-products',
  imports: [
    SelectCityDirective
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent {
  public currentCity = signal<City>(City.FR);
  public readonly City = City;

  public onCitySelected(selectedCity: City): void {
    this.currentCity.set(selectedCity);
  }
}
