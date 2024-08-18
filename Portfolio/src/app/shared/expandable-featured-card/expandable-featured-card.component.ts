import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'expandable-featured-card',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
  ],
  templateUrl: './expandable-featured-card.component.html',
  styleUrl: './expandable-featured-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpandableFeaturedCardComponent {

  constructor(private router: Router) {}

  @Input({ required: true }) title : string = '';
  @Input({ required: true }) src : string ='';
  @Input({ required: true }) description : string ='';
  @Input() expandable? : boolean = false;
  @Input() routerLink: any[] = [];


  isExpanded: boolean = false;
  randomOnlineUsers = Math.floor(Math.random() * 10000) + 1000;

  toggleExpand(): void {
    this.isExpanded = !this.isExpanded;
    console.log('Expanded:', this.isExpanded);
  }

  navigate(): void {
    if (this.routerLink) {
      this.router.navigate(this.routerLink);
    }
  }

 }
