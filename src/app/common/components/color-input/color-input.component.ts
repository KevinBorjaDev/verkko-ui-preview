import { Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-color-input',
  imports: [ReactiveFormsModule],
  templateUrl: './color-input.component.html',
  styleUrl: './color-input.component.css'
})
export class ColorInputComponent {
  category = input.required<string>();

  control = input.required<FormControl | null>();
}
