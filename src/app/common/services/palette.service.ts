import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaletteService {

  constructor() { }

  exportCssVariables(palette: Record<string, string>): string {
    let output = ':root {\n';
    for (const [key, value] of Object.entries(palette)) {
      output += `  --color-${key.toLowerCase()}: ${value};\n`;
    }
    output += '}';
    return output;
  }

  exportTailwindConfig(palette: Record<string, string>): string {
    let output = `module.exports = {\n  theme: {\n    extend: {\n      colors: {\n`;
    for (const [key, value] of Object.entries(palette)) {
      output += `        ${key.toLowerCase()}: '${value}',\n`;
    }
    output += `      }\n    }\n  }\n};`;
    return output;
  }

  exportScssVariables(palette: Record<string, string>): string {
    let output = '';
    for (const [key, value] of Object.entries(palette)) {
      output += `$color-${key.toLowerCase()}: ${value};\n`;
    }
    return output;
  }

  // exportJson(palette: Record<string, string>): string {
  //   return JSON.stringify(palette, null, 2);
  // }

  // exportJsonLower(palette: Record<string, string>): string {
  //   const lowered: Record<string, string> = {};
  //   for (const [key, value] of Object.entries(palette)) {
  //     lowered[key.toLowerCase()] = value;
  //   }
  //   return JSON.stringify(lowered, null, 2);
  // }

  exportJsonCamel(palette: Record<string, string>): string {
    const camel: Record<string, string> = {};
    for (const [key, value] of Object.entries(palette)) {
      camel[this.toCamelCase(key)] = value;
    }
    return JSON.stringify(camel, null, 2);
  }

  toCamelCase(str: string): string {
    return str.toLowerCase().replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
  }

  exportAndroidXml(palette: Record<string, string>): string {
    let output = '<resources>\n';
    for (const [key, value] of Object.entries(palette)) {
      output += `  <color name="color_${key.toLowerCase()}">${value}</color>\n`;
    }
    output += '</resources>';
    return output;
  }

  exportSwiftUIColor(palette: Record<string, string>): string {
    let output = '';
    for (const [key, value] of Object.entries(palette)) {
      const { r, g, b } = this.hexToRgb(value);
      output += `let color${this.capitalize(key.toLowerCase())} = UIColor(red: ${r}/255, green: ${g}/255, blue: ${b}/255, alpha: 1)\n`;
    }
    return output;
  }

  hexToRgb(hex: string): { r: number; g: number; b: number } {
    hex = hex.replace('#', '');
    if (hex.length === 3) {
      hex = hex.split('').map(c => c + c).join('');
    }
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return { r, g, b };
  }

  capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  download(content: string, filename: string, mimeType = 'text/plain'): void {
    const blob = new Blob([content], { type: mimeType });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
  }
}
