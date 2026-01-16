import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from '../../features/header/header.component';
import { HeroComponent } from '../../features/hero/hero.component';
import { ProductsComponent } from '../../features/products/products.component';
import {NewCollectionComponent} from '../../features/new-collection/new-collection.component';

@Component({
  selector: 'app-main',
  imports: [HeaderComponent, HeroComponent, ProductsComponent, NewCollectionComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {}
