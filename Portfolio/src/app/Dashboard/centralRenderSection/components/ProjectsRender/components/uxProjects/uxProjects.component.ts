import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ExpandableFeaturedCardComponent } from '../../../../../../shared/expandable-featured-card/expandable-featured-card.component';
import { PopularCardComponent } from '../../../../../../shared/PopularCard/PopularCard.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'ux-projects',
  standalone: true,
  imports: [
    CommonModule,
    ExpandableFeaturedCardComponent,
    PopularCardComponent,
    TranslateModule
  ],
  templateUrl: './uxProjects.component.html',
  styleUrl: './uxProjects.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UxProjectsComponent {

  public projects = [
    {
      title: 'epic_portfolio',
      description: 'epic_portfolio_description',
      image: '/assets/images/epicPortofolio.webp',
      route: ['dashboard/project/epic_portfolio']
    },
    {
      title: 'menthal_app',
      description: 'menthal_app_description',
      image: '/assets/images/purple6.webp',
      route: ['dashboard/project/menthal_app']
    },
    {
      title: 'volunteer_app',
      description: 'volunteer_app_description',
      image: '/assets/images/volunteerAppBG.webp',
      avatar: '/assets/images/VolunteerAvatarPop.png',
      route: ['dashboard/project/volunteer_app']
    },
    {
      title: 'roomie_app',
      description: 'roomie_app_description',
      image: '/assets/images/roomieAppBG.webp',
      avatar: '/assets/images/RoomieAvatarPop.png',
      route: ['dashboard/project/roomie_app']
    }
  ];

 }
