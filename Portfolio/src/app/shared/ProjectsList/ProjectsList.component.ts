import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'projects-list',
  standalone: true,
  imports: [CommonModule, RouterModule,TranslateModule],
  templateUrl: './ProjectsList.component.html',
  styleUrl: './ProjectsList.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsListComponent {



  public projects = [
    {
      title: 'mobile_scanning_app',
      time: 'min_ago',
      avatar: 'assets/images/projectListAvatar04.png',
      randomNumber:  Math.floor(Math.random() * 10) + 1,
    },
    {
      title: 'logistics_Platform',
      time: 'min_ago',
      avatar: 'assets/images/projectListAvatar03.png',
      randomNumber:  Math.floor(Math.random() * 10 + 1),
    },
    {
      title: 'printing_tool',
      time: 'min_ago',
      avatar: 'assets/images/projectListAvatar02.png',
      randomNumber:  Math.floor(Math.random() * 10 + 1),
    },
    {
      title: 'inventory_management_app',
      time: 'min_ago',
      avatar: 'assets/images/projectListAvatar01.png',
      randomNumber:  Math.floor(Math.random() * 10 + 1),
    },
  ];

  public designProjects = [
    {
      title: 'epic_portfolio',
      time: 'min_ago',
      avatar: 'assets/images/projectListAvatar05.png',
      randomNumber:  Math.floor(Math.random() * 10),
    },
    {
      title: 'menthal_app',
      time: 'min_ago',
      avatar: 'assets/images/projectListAvatar06.png',
      randomNumber:  Math.floor(Math.random() * 10),
    },
    {
      title: 'volunteer_app',
      time: 'min_ago',
      avatar: 'assets/images/projectListAvatar07.png',
      randomNumber:  Math.floor(Math.random() * 10),
    },
    {
      title: 'roomie_app',
      time: 'min_ago',
      avatar: 'assets/images/projectListAvatar08.png',
      randomNumber:  Math.floor(Math.random() * 10),
    },
  ];



}
