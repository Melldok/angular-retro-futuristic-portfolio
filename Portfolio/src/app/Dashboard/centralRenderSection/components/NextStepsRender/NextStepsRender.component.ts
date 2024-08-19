import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BackgroundBannerComponent } from '../../../../shared/BackgroundBanner/BackgroundBanner.component';
import { ExpandableFeaturedCardComponent } from '../../../../shared/expandable-featured-card/expandable-featured-card.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-next-steps-render',
  standalone: true,
  imports: [
    CommonModule,
    BackgroundBannerComponent,
    ExpandableFeaturedCardComponent,
    TranslateModule
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
