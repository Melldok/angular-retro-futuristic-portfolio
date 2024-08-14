import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-background-banner',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './BackgroundBanner.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackgroundBannerComponent { }
