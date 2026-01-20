import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Product } from '../../core/models/product.model';
import { InsertSpaceAtPipe } from '../products/pipes/insert-space-at.pipe';
import { SPACE_INDEX } from '../../core/constants/consts';
import { ProductAddToCartDirective } from './directives/product-add-to-cart.directive';

@Component({
  selector: 'app-product-card',
  imports: [InsertSpaceAtPipe, ProductAddToCartDirective],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;
  @Output() productAdded = new EventEmitter<void>();
  public readonly SPACE_INDEX = SPACE_INDEX;

  public onProductAdded() {
    this.productAdded.emit();
  }
}
