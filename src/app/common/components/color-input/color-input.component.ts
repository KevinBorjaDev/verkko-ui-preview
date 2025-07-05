import { TitleCasePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RemoveUnderscorePipe } from "../../pipes/remove-underscore.pipe";

@Component({
  selector: 'app-color-input',
  imports: [ReactiveFormsModule, TitleCasePipe, RemoveUnderscorePipe],
  templateUrl: './color-input.component.html',
  styleUrl: './color-input.component.css'
})
export class ColorInputComponent {
  category = input.required<string>();

  control = input.required<FormControl | null>();
}
