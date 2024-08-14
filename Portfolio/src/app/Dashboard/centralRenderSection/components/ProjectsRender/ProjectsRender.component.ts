import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-prokects-render',
  standalone: true,
  imports: [
    CommonModule,
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
