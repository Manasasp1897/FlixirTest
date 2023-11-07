import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Menu } from '../models/models';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuListComponent {
  @Input() menu: Menu[] = [];
}
