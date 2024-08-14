import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-popular-card',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './PopularCard.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopularCardComponent { }
