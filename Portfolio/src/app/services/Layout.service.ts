import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {

  constructor(private breakpointObserver: BreakpointObserver) {}

  get isTablet$(): Observable<boolean> {
    return this.breakpointObserver
      .observe(Breakpoints.Tablet)
      .pipe(map(result => result.matches));
  }

  get isDesktop$(): Observable<boolean> {
    return this.breakpointObserver
      .observe([Breakpoints.Web, Breakpoints.XLarge])
      .pipe(map(result => result.matches));
  }
}
