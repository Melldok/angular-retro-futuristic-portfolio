import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-project-render',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './ProjectRender.component.html',
  styleUrl: './ProjectRender.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectRenderComponent { }
