import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'autoColor'
})
export class AutoColorPipe implements PipeTransform {

  transform(hexColor: string): string {
    if (!hexColor) return '#000';

    hexColor = hexColor.replace('#', '');

    // Expandir notación corta (#abc → #aabbcc)
    if (hexColor.length === 3) {
      hexColor = hexColor
        .split('')
        .map(c => c + c)
        .join('');
    }

    const r = parseInt(hexColor.slice(0, 2), 16);
    const g = parseInt(hexColor.slice(2, 4), 16);
    const b = parseInt(hexColor.slice(4, 6), 16);

    // Si el fondo es blanco puro → texto negro
    if (r === 255 && g === 255 && b === 255) {
      return '#000000';
    }

    // Si el fondo es negro puro → texto blanco
    if (r === 0 && g === 0 && b === 0) {
      return '#ffffff';
    }

    const luminance = 0.299 * r + 0.587 * g + 0.114 * b;

    console.log(' LUMINANCE ', luminance)

    // Si es oscuro, texto blanco; si es claro, texto negro
    return luminance < 128 ? '#ffffff' : '#000000';
  }

}
