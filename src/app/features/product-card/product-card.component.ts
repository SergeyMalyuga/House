import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Product} from '../../core/models/product.model';
import {InsertSpaceAtPipe} from '../products/pipes/insert-space-at.pipe';
import {SPACE_INDEX} from '../../core/constants/consts';

@Component({
  selector: 'app-product-card',
  imports: [
    InsertSpaceAtPipe
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent {
  @Input({required: true}) product!: Product;
  protected readonly SPACE_INDEX = SPACE_INDEX;
}
