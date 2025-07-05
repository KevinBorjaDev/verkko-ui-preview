import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation, WritableSignal } from '@angular/core';
import { AppService } from '../../app.service';
import { ColorI } from '../../common/interfaces/color.interface';
import { AutoColorPipe } from '../../common/pipes/auto-color.pipe'

@Component({
  selector: 'app-desktop-ui-landing',
  templateUrl: './desktop-ui-landing.component.html',
  styleUrl: './desktop-ui-landing.component.css',
  imports: [CommonModule, AutoColorPipe],
  encapsulation: ViewEncapsulation.None
})
export class DesktopUiLandingComponent {
  palette: WritableSignal<ColorI>;

  constructor(private appService: AppService) {
    this.palette = appService.getPalette();
  }
}
