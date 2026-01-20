import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {HeaderComponent} from '../../features/header/header.component';
import {HeroComponent} from '../../features/hero/hero.component';
import {ProductsComponent} from '../../features/products/products.component';
import {NewCollectionComponent} from '../../features/new-collection/new-collection.component';
import {AboutComponent} from '../../features/about/about.component';
import {FooterComponent} from '../../features/footer/footer.component';

@Component({
  selector: 'app-main',
  imports: [
    HeaderComponent,
    HeroComponent,
    ProductsComponent,
    NewCollectionComponent,
    AboutComponent,
    FooterComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {
  public cartQuantity = signal<number>(0);
}
