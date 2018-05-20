import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cnpjFormat'
})

export class CnpjFormat implements PipeTransform {

  public transform(cnpj: string): string {
    if (!cnpj || cnpj.trim() === '') { return ''; }
    let formatted: string;
    formatted = cnpj.substring(0, 2) + '.';
    formatted = formatted + cnpj.substring(2, 5) + '.';
    formatted = formatted + cnpj.substring(5, 8) + '/';
    formatted = formatted + cnpj.substring(8, 12) + '-';
    formatted = formatted + cnpj.substring(12, 14);
    return formatted;
  }
}
