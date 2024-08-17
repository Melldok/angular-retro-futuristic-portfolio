import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'expandable-featured-card',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './expandable-featured-card.component.html',
  styleUrl: './expandable-featured-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ExpandableFeaturedCardComponent {

  @Input({ required: true }) title : string = '';
  @Input({ required: true }) src : string ='';
  @Input({ required: true }) description : string ='';

  isExpanded: boolean = false;
  randomOnlineUsers = Math.floor(Math.random() * 10000) + 1000;

  toggleExpand(): void {
    this.isExpanded = !this.isExpanded;
  }


 }
