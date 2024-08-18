import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProjectsListComponent } from '../../shared/ProjectsList/ProjectsList.component';

@Component({
  selector: 'profile-render-section',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ProjectsListComponent
  ],
  templateUrl: './ProfileRenderSection.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./ProfileRenderSection.component.css']
})
export class ProfileRenderSectionComponent { }
