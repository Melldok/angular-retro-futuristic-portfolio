import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'background-banner',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './BackgroundBanner.component.html',
  styleUrls: ['./BackgroundBanner.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackgroundBannerComponent {

  @Input({ required: true }) title : string = '';
  @Input({ required: true }) src : string ='';

  public randomOnlineUsers = Math.floor(Math.random() * 10000) + 1000;

  handleClick(): void {

  }

 }
