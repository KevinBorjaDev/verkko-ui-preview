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
  colorPrimary = input<string>('gray');
  colorSecondary = input<string>('gray');
  colorAccent = input<string>('gray');
}
