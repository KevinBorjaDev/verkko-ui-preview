import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { AppService } from '../../app.service';
import { ColorI } from '../../common/interfaces/color.interface';
import { PALETTE } from '../../common/constants/app.constants';

@Component({
  selector: 'app-desktop-ui-landing',
  templateUrl: './desktop-ui-landing.component.html',
  styleUrl: './desktop-ui-landing.component.css',
  imports: [CommonModule],
  encapsulation: ViewEncapsulation.None
})
export class DesktopUiLandingComponent {
  palette: ColorI = PALETTE;

  constructor(private appService: AppService) {
    this.appService.palette$.subscribe(p => { if(p) this.palette = p });
  }
}
