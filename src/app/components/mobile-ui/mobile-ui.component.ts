import { Component } from '@angular/core';
import { AppService } from '../../app.service';
import { CommonModule } from '@angular/common';
import { ColorI } from '../../common/interfaces/color.interface';
import { PALETTE } from '../../common/constants/app.constants';

@Component({
  selector: 'app-mobile-ui',
  imports: [CommonModule],
  templateUrl: './mobile-ui.component.html',
  styleUrl: './mobile-ui.component.css'
})
export class MobileUiComponent {
 palette: ColorI = PALETTE;

  constructor(private appService: AppService) {
    this.appService.palette$.subscribe(p => { if(p) this.palette = p });
  }
}
