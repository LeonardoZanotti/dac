import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'caixaAlta',
})
export class CaixaAltaPipe implements PipeTransform {
  transform(value: string | undefined): string {
    return value ? value.toUpperCase() : '';
  }
}
