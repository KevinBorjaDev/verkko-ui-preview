import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ColorI } from './common/interfaces/color.interface';

@Injectable({ providedIn: 'root' })
export class AppService {
  private paletteSubject = new BehaviorSubject< ColorI | null>(null);
  palette$ = this.paletteSubject.asObservable();

  setPalette(colors: ColorI) {
    this.paletteSubject.next(colors);
  }
}
