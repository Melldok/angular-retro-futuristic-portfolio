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
export class ProfileRenderSectionComponent {



  navigateToLinkedin() {
    window.open('https://www.linkedin.com/in/david-dokic-lazinica-11981a230/', '_blank');
  }

  navigateToGithub() {
    window.open('https://github.com/Melldok', '_blank');
  }


}
