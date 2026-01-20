import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { Product } from '../../core/models/product.model';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-swiper',
  imports: [ProductCardComponent],
  templateUrl: './swiper.component.html',
  styleUrl: './swiper.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwiperComponent implements AfterViewInit, OnDestroy, OnChanges {
  @Input({ required: true }) products!: Product[];

  private swiper!: Swiper;
  private elementRef = inject(ElementRef);

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['products'] && this.swiper) {
      this.swiper.update();
      this.swiper.slideTo(0);
    }
  }
  ngAfterViewInit(): void {
    const swiperElement =
      this.elementRef.nativeElement.querySelector('.swiper');
    this.swiper = new Swiper(swiperElement, {
      modules: [Navigation, Pagination],
      slidesPerView: 3,
      spaceBetween: 30,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },

      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        481: {
          slidesPerView: 2,
        },
        780: {
          slidesPerView: 3,
        },
      },
      observer: true,
      observeParents: true,
      observeSlideChildren: true,
      speed: 1000,
    });
  }

  ngOnDestroy(): void {
    this.swiper.destroy();
  }
}
