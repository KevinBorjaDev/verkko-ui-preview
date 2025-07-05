import { Injectable, signal } from '@angular/core';
import { Mode, PALETTE } from './common/constants/app.constants';
import { ColorI } from './common/interfaces/color.interface';

@Injectable({ providedIn: 'root' })
export class AppService {

  private mode = signal<Mode>('desktop');
  private palette = signal<ColorI>(PALETTE);

  getPalette() {
    return this.palette;
  }

  setPalette(palette: ColorI) {
    this.palette.set(palette);
  }

  setMode(mode: Mode) {
    this.mode.set(mode);
  }

  getMode() {
    return this.mode();
  }

}
