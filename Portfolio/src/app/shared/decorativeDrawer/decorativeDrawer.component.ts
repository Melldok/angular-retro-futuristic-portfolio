import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'decorative-drawer',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './decorativeDrawer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./decorativeDrawer.component.css'],
})
export class DecorativeDrawerComponent { }
