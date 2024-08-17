import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LeftSectionComponent } from './AppNavigation/app-navigation.component';
import { CentralRenderSectionComponent } from './centralRenderSection/centralRenderSection.component';
import { ProfileRenderSectionComponent } from './ProfileRenderSection/ProfileRenderSection.component';
import { RouterOutlet } from '@angular/router';
import { DecorativeDrawerComponent } from '../shared/decorativeDrawer/decorativeDrawer.component';
import { TranslateModule } from '@ngx-translate/core';
import { MobileNavigationComponent } from './AppNavigationMobile/AppNavigationMobile.component';
import { LayoutService } from '../services/Layout.service';
import { NameHeaderComponent } from '../shared/nameHeader/nameHeader.component';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    LeftSectionComponent,
    CentralRenderSectionComponent,
    ProfileRenderSectionComponent,
    RouterOutlet,
    DecorativeDrawerComponent,
    TranslateModule,
    MobileNavigationComponent,
    NameHeaderComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
  ,

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {


  public layoutService = inject(LayoutService);
  isHandset$ = this.layoutService.isHandset$;


}
