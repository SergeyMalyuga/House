import {ChangeDetectionStrategy, Component, HostListener, inject, signal} from '@angular/core';
import {ToggleNavMenuDirective} from './directives/toggle-nav-menu.directive';
import {BodyService} from '../../core/services/body.sevice';

@Component({
  selector: 'app-header',
  imports: [
    ToggleNavMenuDirective
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  private bodyService = inject(BodyService);

  public isMenuOpen = signal<boolean>(false);

  public onNavMenuToggled() {
    this.isMenuOpen.set(!this.isMenuOpen());
    this.bodyService.setOverflow(this.isMenuOpen());
  }
}
