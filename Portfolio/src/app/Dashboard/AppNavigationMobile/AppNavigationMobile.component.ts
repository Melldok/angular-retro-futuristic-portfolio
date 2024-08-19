import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { routes } from '../../app.routes';
import { NavigationEnd, Router, RouterModule } from '@angular/router';


import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-navigation-mobile',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule
  ],
  templateUrl: './app-navigation-mobile.component.html',
  styleUrls: ['./app-navigation-mobile.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MobileNavigationComponent {

  public menuOpen: boolean = false;

  public menuItems = routes.map((route) => route.children ?? []).flat()
  .filter(route => route && route.path)
  .filter(route => !route.path?.includes(':'))

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.menuOpen = false; // Collapse menu on route change
      }
    });
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  collapseMenu(): void {
    this.menuOpen = false; // Explicitly collapse menu on item click
  }


}
