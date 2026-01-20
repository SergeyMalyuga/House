import {
  ChangeDetectionStrategy,
  Component,
  inject, Input,
  signal,
} from '@angular/core';
import {ToggleNavMenuDirective} from './directives/toggle-nav-menu.directive';
import {BodyService} from '../../core/services/body.sevice';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-header',
  imports: [ToggleNavMenuDirective, MatBadgeModule, MatButtonModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @Input({required: true}) cartQuantity!: number;
  private bodyService = inject(BodyService);

  public isMenuOpen = signal<boolean>(false);

  public onNavMenuToggled() {
    this.isMenuOpen.set(!this.isMenuOpen());
    this.bodyService.setOverflow(this.isMenuOpen());
  }
}
