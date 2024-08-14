import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'left-section',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './LeftSection.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeftSectionComponent { }
