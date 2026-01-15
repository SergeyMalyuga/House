import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Product} from '../../core/models/product.model';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent {
  @Input({required: true}) product!: Product;
}
