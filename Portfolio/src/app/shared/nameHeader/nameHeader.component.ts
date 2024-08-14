import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-name-header',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './nameHeader.component.html',
  styleUrl: './nameHeader.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NameHeaderComponent { }
