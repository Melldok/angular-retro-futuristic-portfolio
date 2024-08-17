import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BackgroundBannerComponent } from '../../../../shared/BackgroundBanner/BackgroundBanner.component';
import { FeaturedCardComponent } from '../../../../shared/FeaturedCard/FeaturedCard.component';
import { ExpandableFeaturedCardComponent } from '../../../../shared/expandable-featured-card/expandable-featured-card.component';
import { DecorativeDrawerComponent } from '../../../../shared/decorativeDrawer/decorativeDrawer.component';

@Component({
  selector: 'app-home-render',
  standalone: true,
  imports: [
    CommonModule,
    BackgroundBannerComponent,
    ExpandableFeaturedCardComponent,
    DecorativeDrawerComponent
  ],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './HomeRender.component.html',
  styleUrl: './HomeRender.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeRenderComponent {}
