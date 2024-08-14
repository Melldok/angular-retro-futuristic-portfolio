import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'profile-render-section',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './ProfileRenderSection.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileRenderSectionComponent { }
