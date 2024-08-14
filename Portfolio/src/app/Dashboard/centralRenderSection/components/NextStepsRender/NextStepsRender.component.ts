import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-next-steps-render',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './NextStepsRender.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NextStepsRenderComponent { }
