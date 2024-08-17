import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'featured-card',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './FeaturedCard.component.html',
  styleUrl: './FeaturedCard.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturedCardComponent {

  @Input({ required: true }) title : string = '';
  @Input({ required: true }) src : string ='';
  @Input({ required: true }) description : string ='';

  handleClick() {
    console.log('Card clicked');
  }
  randomOnlineUsers = Math.floor(Math.random() * 10000) + 1000;

 }
