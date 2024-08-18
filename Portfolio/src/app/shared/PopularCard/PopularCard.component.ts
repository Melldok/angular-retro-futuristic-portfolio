import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'popular-card',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterLink],
  templateUrl: './PopularCard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./PopularCard.component.scss'],
})
export class PopularCardComponent {
  constructor(private router: Router) {}

  @Input({ required: true }) title: string = '';
  @Input({ required: true }) backgroundSrc: string = '';
  @Input({ required: true }) avatarSrc: string = '';
  @Input({ required: true }) description: string = '';
  @Input() routerLink: any[] = [];

  handleClick() {
    console.log('Card clicked');
  }
  randomOnlineMembers = Math.floor(Math.random() * 10000) + 1000;

  navigate(): void {
    if (this.routerLink) {
      this.router.navigate(this.routerLink);
    }
  }
}
