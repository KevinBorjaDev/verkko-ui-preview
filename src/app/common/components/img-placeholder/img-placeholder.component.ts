import { Component, input } from '@angular/core';

@Component({
  selector: 'img-placeholder',
  imports: [],
  templateUrl: './img-placeholder.component.html',
  styleUrl: './img-placeholder.component.css'
})
export class ImgPlaceholderComponent {

  width = input.required<string>();
  height = input.required<string>();
}
