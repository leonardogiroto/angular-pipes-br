import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cepFormat'
})

export class CepFormat implements PipeTransform {

  public transform(cep: string): string {
    if (!cep || cep.trim() === '') { return ''; }
    let formatted: string;
    formatted = cep.substring(0, 5) + '-';
    formatted = formatted + cep.substring(5, 8);
    return formatted;
  }
}
