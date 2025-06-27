import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppService } from '../../app.service';
import { PALETTE } from '../../common/constants/app.constants';
import { ColorI } from '../../common/interfaces/color.interface';
import { ColorInputComponent } from "../../common/components/color-input/color-input.component";

@Component({
  selector: 'app-admin-panel',
  imports: [ReactiveFormsModule, CommonModule, ColorInputComponent],
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.css'
})
export class AdminPanelComponent {
  private fb = inject(FormBuilder);

  categories = Object.keys(PALETTE) as Array<keyof typeof PALETTE>;

  paletteForm = this.fb.group({});

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.categories.forEach(cat => {
      console.log('CATEGORIA', cat);
      this.paletteForm.addControl(cat, new FormControl(PALETTE[cat], Validators.required))
    });
    console.log('FORM GENERADO', this.paletteForm);
  }

  getControl(name: string){
    return this.paletteForm.get(name) as FormControl;
  }

  submit(): void {
    if (this.paletteForm.valid) {
      console.log('FORM', this.paletteForm.value);
      const valores = this.paletteForm.value;
      this.appService.setPalette(valores as ColorI);
      console.log('Paleta enviada:', valores);
    } else {
      // this.colores.markAllAsTouched();
    }
  }
}
