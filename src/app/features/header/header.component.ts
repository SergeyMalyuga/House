import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {ToggleNavMenuDirective} from './directives/toggle-nav-menu.directive';

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
  isMenuOpen = signal<boolean>(false);

  public onNavMenuToggled() {
    this.isMenuOpen.set(!this.isMenuOpen());
  }
}
