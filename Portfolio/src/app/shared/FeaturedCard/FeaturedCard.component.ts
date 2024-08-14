import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-featured-card',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './FeaturedCard.component.html',
  styleUrl: './FeaturedCard.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturedCardComponent { }
