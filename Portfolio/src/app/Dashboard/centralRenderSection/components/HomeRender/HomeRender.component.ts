import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BackgroundBannerComponent } from '../../../../shared/BackgroundBanner/BackgroundBanner.component';
import { ExpandableFeaturedCardComponent } from '../../../../shared/expandable-featured-card/expandable-featured-card.component';
import { DecorativeDrawerComponent } from '../../../../shared/decorativeDrawer/decorativeDrawer.component';
import { PopularCardComponent } from '../../../../shared/PopularCard/PopularCard.component';

@Component({
  selector: 'app-home-render',
  standalone: true,
  imports: [
    CommonModule,
    BackgroundBannerComponent,
    ExpandableFeaturedCardComponent,
    DecorativeDrawerComponent,
    PopularCardComponent,
  ],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './HomeRender.component.html',
  styleUrl: './HomeRender.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeRenderComponent {

  public titles = [
    'full_stack_frontend',
    'ux_designer',
    'epic_portfolio',
    'what_is_next'
  ]

  public descriptions = [
    'developer_description',
    'designer_description',
    'epic_portfolio_desc',
    'what_is_next_desc'
  ]

}
