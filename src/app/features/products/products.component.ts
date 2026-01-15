import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {Country} from '../../core/constants/consts';
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
  public currentCity = signal<Country>(Country.FR);
  public readonly City = Country;

  public onCitySelected(selectedCity: Country): void {
    this.currentCity.set(selectedCity);
  }
}
