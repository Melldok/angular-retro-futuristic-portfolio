import { isPlatformBrowser } from "@angular/common";
import { inject, Inject, Injectable, PLATFORM_ID } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Injectable({
  providedIn: 'root',
})
export class LanguageSwitchService {
  public static readonly availableLanguages: string[] = ['en', 'es'];
  public static readonly defaultLanguage: string = LanguageSwitchService.availableLanguages[0];

  private translateService: TranslateService = inject(TranslateService);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  public initLanguageFromLocalStorage(): void {
    if (isPlatformBrowser(this.platformId)) {
      const languageFromStorage: string | null = localStorage.getItem('language');
      if (
        languageFromStorage &&
        LanguageSwitchService.availableLanguages.includes(languageFromStorage)
      ) {
        this.setLanguage(languageFromStorage);
      }
    }
  }

  public getCurrentLanguage(): string {
    if (
      this.translateService.currentLang &&
      this.translateService.currentLang !== LanguageSwitchService.defaultLanguage
    ) {
      return this.translateService.currentLang;
    }
    return LanguageSwitchService.defaultLanguage;
  }

  public setLanguage(languageId: string): void {
    if (LanguageSwitchService.availableLanguages.includes(languageId)) {
      this.translateService.use(languageId);
      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem('language', languageId);
      }
    }
  }
}
