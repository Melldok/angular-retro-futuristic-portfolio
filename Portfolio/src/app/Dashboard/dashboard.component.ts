import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LeftSectionComponent } from './LeftSection/LeftSection.component';
import { CentralRenderSectionComponent } from './centralRenderSection/centralRenderSection.component';
import { ProfileRenderSectionComponent } from './ProfileRenderSection/ProfileRenderSection.component';
import { RouterOutlet } from '@angular/router';
import { DecorativeDrawerComponent } from '../shared/decorativeDrawer/decorativeDrawer.component';

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
  ],
  templateUrl: './dashboard.component.html',
  styles: `
    :host {
    }
    body{

    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {}
