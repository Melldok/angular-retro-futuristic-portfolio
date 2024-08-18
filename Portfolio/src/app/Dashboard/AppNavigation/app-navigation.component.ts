import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { routes } from '../../app.routes';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs';
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
