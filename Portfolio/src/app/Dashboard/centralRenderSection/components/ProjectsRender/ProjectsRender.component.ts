import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BackgroundBannerComponent } from '../../../../shared/BackgroundBanner/BackgroundBanner.component';

@Component({
  selector: 'app-prokects-render',
  standalone: true,
  imports: [
    CommonModule,
    BackgroundBannerComponent,
  ],
  templateUrl: './ProjectsRender.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsRenderComponent { }
