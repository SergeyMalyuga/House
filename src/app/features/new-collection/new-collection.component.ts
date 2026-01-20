import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-new-collection',
  imports: [],
  templateUrl: './new-collection.component.html',
  styleUrl: './new-collection.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewCollectionComponent {}
