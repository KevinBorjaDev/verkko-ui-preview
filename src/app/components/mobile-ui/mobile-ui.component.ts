import { Component } from '@angular/core';
import { AppService } from '../../app.service';
import { CommonModule } from '@angular/common';
import { ColorI } from '../../common/interfaces/color.interface';
import { PALETTE } from '../../common/constants/app.constants';
import { AutoColorPipe } from "../../common/pipes/is-dark-color.pipe";
import { ImgPlaceholderComponent } from "../../common/components/img-placeholder/img-placeholder.component";

@Component({
  selector: 'app-mobile-ui',
  imports: [CommonModule, AutoColorPipe, ImgPlaceholderComponent],
  templateUrl: './mobile-ui.component.html',
  styleUrl: './mobile-ui.component.css'
})
export class MobileUiComponent {
 palette: ColorI = PALETTE;

  constructor(private appService: AppService) {
    this.appService.palette$.subscribe(p => { if(p) this.palette = p });
  }
}
