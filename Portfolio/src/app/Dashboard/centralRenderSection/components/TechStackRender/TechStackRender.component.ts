import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BackgroundBannerComponent } from '../../../../shared/BackgroundBanner/BackgroundBanner.component';
import { TranslateModule } from '@ngx-translate/core';
import { ExpandableFeaturedCardComponent } from '../../../../shared/expandable-featured-card/expandable-featured-card.component';

@Component({
  selector: 'app-tech-stack-render',
  standalone: true,
  imports: [
    CommonModule,
    BackgroundBannerComponent,
    TranslateModule,
    ExpandableFeaturedCardComponent,
  ],
  templateUrl: './TechStackRender.component.html',
  styleUrls: ['./TechStackRender.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TechStackRenderComponent {
  public techStackLogosRenderer = [
    { src: '/assets/images/TechStackLogo01.svg', description: 'React' },
    { src: '/assets/images/TechStackLogo18.svg', description: 'Angular' },
    { src: '/assets/images/TechStackLogo02.svg', description: 'Typescript' },
    { src: '/assets/images/TechStackLogo03.svg', description: 'Javascript' },
    { src: '/assets/images/TechStackLogo04.svg', description: 'Figma' },
    { src: '/assets/images/TechStackLogo05.svg', description: 'Python' },
    { src: '/assets/images/TechStackLogo06.svg', description: 'Electron' },
    { src: '/assets/images/TechStackLogo07.svg', description: 'CSS' },
    { src: '/assets/images/TechStackLogo08.svg', description: 'HTML' },
    { src: '/assets/images/TechStackLogo09.svg', description: 'VSCode' },
    { src: '/assets/images/TechStackLogo10.svg', description: 'Bootstrap' },
    { src: '/assets/images/TechStackLogo11.svg', description: 'Vite' },
    { src: '/assets/images/TechStackLogo12.svg', description: 'Ionic' },
    { src: '/assets/images/TechStackLogo13.svg', description: 'Tailwind' },
    { src: '/assets/images/TechStackLogo14.svg', description: 'Wordpress' },
    { src: '/assets/images/TechStackLogo15.svg', description: 'Mongodb' },
    { src: '/assets/images/TechStackLogo16.svg', description: 'Redux' },
    { src: '/assets/images/TechStackLogo17.svg', description: 'AWS' },
    { src: '/assets/images/TechStackLogo19.svg', description: 'NodeJS' },
    { src: '/assets/images/TechStackLogo20.svg', description: 'Graphql' },
    { src: '/assets/images/TechStackLogo21.svg', description: 'NextJS' },
    { src: '/assets/images/TechStackLogo22.svg', description: 'Git' },
  ];
}
