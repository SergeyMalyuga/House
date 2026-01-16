import {ChangeDetectionStrategy, Component, computed, OnInit, signal} from '@angular/core';
import {CountryEn} from '../../core/constants/consts';
import {SelectCityDirective} from './directives/select-city.directive';
import {mockProducts} from './mocks/mock-data';
import {ProductCardComponent} from '../product-card/product-card.component';
import {Product} from '../../core/models/product.model';
import {toObservable} from '@angular/core/rxjs-interop';

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
  public currentCity = (signal<CountryEn>(CountryEn.FR));
  public readonly City = CountryEn;

  public products = computed(() => {
    const city = this.currentCity();
    return mockProducts[city] || [];
  });

  public onCitySelected(selectedCity: CountryEn): void {
    this.currentCity.set(selectedCity);
  }
}
