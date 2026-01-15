import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {CountryRu} from '../../core/constants/consts';
import {SelectCityDirective} from './directives/select-city.directive';
import {mockProducts} from './mocks/mock-data';
import {ProductCardComponent} from '../product-card/product-card.component';

@Component({
  selector: 'app-products',
  imports: [
    SelectCityDirective,
    ProductCardComponent
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent {
  public currentCity = signal<CountryRu>(CountryRu.FR);
  public readonly City = CountryRu;
  public products = mockProducts;

  public onCitySelected(selectedCity: CountryRu): void {
    this.currentCity.set(selectedCity);
  }
}
