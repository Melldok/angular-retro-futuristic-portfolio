import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'central-render-section',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>centralRenderSection works!</p>`,
  styleUrl: './centralRenderSection.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CentralRenderSectionComponent { }
