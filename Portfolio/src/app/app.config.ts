import { APP_INITIALIZER, ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { initializeTranslation, provideTranslation } from './config/httpLoaderFactory';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withViewTransitions({
        skipInitialTransition: true,
      })

    ),
    provideClientHydration(),
    provideHttpClient(
      withFetch()
    ),
    importProvidersFrom([TranslateModule.forRoot(provideTranslation())]),
    provideRouter(routes),
    {
      provide: APP_INITIALIZER,
      useFactory: initializeTranslation,
      multi: true,
      deps: [TranslateService],
    },
  ],
};
