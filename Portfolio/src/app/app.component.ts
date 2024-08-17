import { CommonModule } from '@angular/common';
import { afterRender, Component } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, LayoutModule],
  templateUrl: './app.component.html',

})
export class AppComponent {
  title = 'Portfolio';

  constructor() {

    afterRender(() => {
      // To use the localStorage API, you must first check if it exists, as it is not available in all environments. This project uses SSR so it is not available in the server environment.
      if (typeof localStorage !== 'undefined') {
        // If the language is not set in localStorage, set it to 'en'.
        if (!localStorage.getItem('language')) {
          localStorage.setItem('language', 'en');
        }
      }
    } );
  }
}
