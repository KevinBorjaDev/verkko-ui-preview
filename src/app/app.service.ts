import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ColorI } from './common/interfaces/color.interface';
import { Mode } from './common/constants/app.constants';

@Injectable({ providedIn: 'root' })
export class AppService {
  private modeSubject = new BehaviorSubject<Mode>('desktop');
  mode$ = this.modeSubject.asObservable();

  private paletteSubject = new BehaviorSubject< ColorI | null>(null);
  palette$ = this.paletteSubject.asObservable();

  setPalette(colors: ColorI) {
    this.paletteSubject.next(colors);
  }

  setMode(mode: Mode) {
    this.modeSubject.next(mode);
  }

  getMode(){
    return this.modeSubject.getValue();
  }
  
}
