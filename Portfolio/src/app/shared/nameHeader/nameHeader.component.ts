import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageSwitchService } from '../../services/LanguageSwitch.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'name-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './nameHeader.component.html',
  styleUrls: ['./nameHeader.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NameHeaderComponent {
  private languageSwitchService = inject(LanguageSwitchService);

  constructor() {}

  get currentLanguage(): string {
    return this.languageSwitchService.getCurrentLanguage();
  }

  switchLanguage(): void {
    const newLanguage = this.currentLanguage === 'en' ? 'es' : 'en';
    this.languageSwitchService.setLanguage(newLanguage);
  }

  resumeDownload(): void {
    const downloadUrl =
      this.currentLanguage === 'en'
        ? '/assets/docs/CVResumeENG.pdf'
        : '/assets/docs/CVResumeESP.pdf';
    window.open(downloadUrl, '_blank');
  }
}
