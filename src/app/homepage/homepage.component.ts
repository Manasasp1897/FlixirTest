import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { Menu } from '../models/models';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomepageComponent {
  public user: string = 'User';
  public opened = true;

  toggle(): void {
    this.opened = !this.opened;
  }

  public menu: Menu[] = [
    {
      title: 'Course',
      link: '/course',
      color: '#ff7f0e',
    },
    {
      title: 'College',
      link: '/college',
      color: '#ff7f0e',
    },
    {
      title: 'Faculty',
      link: '/faculty',
      color: '#ff7f0e',
    },
    {
      title: 'State',
      link: '/state',
      color: '#ff7f0e',
    }
  ];
}
