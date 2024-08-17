import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'decorative-drawer',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [
    CommonModule,
  ],
  templateUrl: './decorativeDrawer.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DecorativeDrawerComponent { }
