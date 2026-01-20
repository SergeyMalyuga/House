import {ChangeDetectionStrategy, Component, computed, signal,} from '@angular/core';
import {CountryEn, DisplayType} from '../../core/constants/consts';
import {SelectCityDirective} from './directives/select-city.directive';
import {mockProducts} from './mocks/mock-data';
import {ProductCardComponent} from '../product-card/product-card.component';
import {MatButtonToggle, MatButtonToggleGroup} from '@angular/material/button-toggle';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {startWith} from 'rxjs';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [SelectCityDirective, ProductCardComponent, MatButtonToggleGroup, MatButtonToggleGroup, MatButtonToggle, ReactiveFormsModule, AsyncPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent {
  public currentCity = signal<CountryEn>(CountryEn.FR);
  public readonly City = CountryEn;
  public displayControl = new FormControl<DisplayType>(DisplayType.LIST);
  public displayType$ = this.displayControl.valueChanges.pipe(startWith(this.displayControl.value));

  public products = computed(() => {
    const city = this.currentCity();
    return mockProducts[city] || [];
  });

  public onCitySelected(selectedCity: CountryEn): void {
    this.currentCity.set(selectedCity);
  }

  public onToggleSelected(): void {
    console.log(this.displayControl.value);
  }

  public readonly DisplayType = DisplayType;
}
