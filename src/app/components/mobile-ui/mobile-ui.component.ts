import { CommonModule } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';
import { AppService } from '../../app.service';
import { ImgPlaceholderComponent } from "../../common/components/img-placeholder/img-placeholder.component";
import { ColorI } from '../../common/interfaces/color.interface';
import { AutoColorPipe } from '../../common/pipes/auto-color.pipe'

@Component({
  selector: 'app-mobile-ui',
  imports: [CommonModule, AutoColorPipe, ImgPlaceholderComponent],
  templateUrl: './mobile-ui.component.html',
  styleUrl: './mobile-ui.component.css'
})
export class MobileUiComponent {
 palette: WritableSignal<ColorI>;
 showToast = signal(false);

  constructor(private appService: AppService) {
    this.palette = this.appService.getPalette();
  }

  toggleToast(){
    this.showToast.update(val => !val);
  }
}
