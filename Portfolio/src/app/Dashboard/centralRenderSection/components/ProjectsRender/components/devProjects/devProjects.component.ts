import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ExpandableFeaturedCardComponent } from '../../../../../../shared/expandable-featured-card/expandable-featured-card.component';
import { PopularCardComponent } from '../../../../../../shared/PopularCard/PopularCard.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'dev-projects',
  standalone: true,
  imports: [
    CommonModule,
    ExpandableFeaturedCardComponent,
    PopularCardComponent,
    TranslateModule
  ],
  templateUrl: './devProjects.component.html',
  styleUrl: './devProjects.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DevProjectsComponent {

  public projects = [
    {
      title: 'mobile_scanning_app',
      description: 'mobile_scanning_app_description',
      image: '/assets/images/mobileScanningAppBG.webp',
      route: ['dashboard/project/mobile_scanning_app']

    },
    {
      title: 'logistics_Platform',
      description: 'logistics_Platform_description',
      image: '/assets/images/logisticsBG.webp',
      route: ['dashboard/project/logistics_Platform']
    },
    {
      title: 'printing_tool',
      description: 'printing_tool_description',
      image: '/assets/images/purple1.webp',
      avatar: '/assets/images/PrintingAvatarPop.png',
      route: ['dashboard/project/printing_tool']
    },
    {
      title: 'inventory_management_app',
      description: 'inventory_management_app_description',
      image: '/assets/images/purple3.webp',
      avatar: '/assets/images/InventoryAvatarPop.png',
      route: ['dashboard/project/inventory_management_app']
    }
  ];

}
