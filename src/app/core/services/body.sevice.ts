import {inject, Injectable} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class BodyService {
  private document = inject(DOCUMENT);

  /**
   * * Управляет скроллом body.
   *  * @param disable - если true, скролл отключается (`overflow: hidden`)
   */
  setOverflow(isLocked: boolean) {
    this.document.body.style.overflow = isLocked ? 'hidden' : '';
  }
}
