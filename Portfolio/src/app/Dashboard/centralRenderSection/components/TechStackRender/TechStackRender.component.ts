import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-tech-stack-render',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './TechStackRender.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TechStackRenderComponent { }
