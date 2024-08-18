import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { BackgroundBannerComponent } from '../../../../shared/BackgroundBanner/BackgroundBanner.component';
import { UxProjectsComponent } from './components/uxProjects/uxProjects.component';
import { DevProjectsComponent } from './components/devProjects/devProjects.component';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-prokects-render',
  standalone: true,
  imports: [
    CommonModule,
    BackgroundBannerComponent,
    RouterModule
  ],
  templateUrl: './ProjectsRender.component.html',
  styleUrls: ['./ProjectsRender.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsRenderComponent {
  
  constructor(private router: Router) {}


 }
