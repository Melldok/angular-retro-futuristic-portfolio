import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { routes } from '../../app.routes';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs';
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

  public menuItems = routes.map((route) => route.children ?? []).flat()
  .filter(route => route && route.path)
  .filter(route => !route.path?.includes(':'))

  // public currentRoute = signal<string>('');

  // constructor(private router: Router, private route: ActivatedRoute) {}

  // ngOnInit() {
  //   // Set the initial route when the component is initialized
  //   this.updateCurrentRoute(this.router.url);

  //   // Subscribe to NavigationEnd events to update the route when navigation occurs
  //   this.router.events.pipe(
  //     filter(event => event instanceof NavigationEnd)
  //   ).subscribe((event: NavigationEnd) => {
  //     this.updateCurrentRoute(event.urlAfterRedirects);
  //   });
  // }

  // private updateCurrentRoute(url: string): void {
  //   const segments = url.split('/');
  //   const lastSegment = segments.pop() || segments.pop();
  //   this.currentRoute.set(lastSegment || 'home');
  // }

}
