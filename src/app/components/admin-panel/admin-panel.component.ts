import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppService } from '../../app.service';
import { Mode, PALETTE } from '../../common/constants/app.constants';
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

  mode = this.fb.group({
    mode: new FormControl()
  })

  categories = Object.keys(PALETTE) as Array<keyof typeof PALETTE>;

  paletteForm = this.fb.group({});

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.generateForm();
    this.formMode?.setValue(this.appService.getMode());
    this.formMode?.valueChanges.subscribe((value) => {
      this.appService.setMode(value)
    })
  }

  getControl(name: string) {
    return this.paletteForm.get(name) as FormControl;
  }

  get formMode(){
    return this.mode.get('mode');
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

  generateForm() {
    this.categories.forEach(cat => {
      this.paletteForm.addControl(cat, new FormControl(PALETTE[cat], Validators.required))
    });
  }
}
