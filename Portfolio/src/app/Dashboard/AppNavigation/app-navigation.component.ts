import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule
  ],
  templateUrl: './app-navigation.component.html',
  styleUrls: ['./app-navigation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeftSectionComponent {

  public menuItems = routes.map((route) => route.children ?? []).flat()
  .filter(route => route && route.path)
  .filter(route => !route.path?.includes(':'))



}
