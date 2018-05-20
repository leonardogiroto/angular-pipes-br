import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormat'
})

export class CurrencyFormat implements PipeTransform {

  public transform(value: number, currencySign: string = 'R$ ',
                   chunkDelimiter: string = '.', decimalDelimiter: string = ','): string {
    if (!value) { return currencySign + '0' + decimalDelimiter + '00'; }
    const changedValue = this.addCommas(value.toFixed(2));
    const formatted = changedValue.toString().replace(/[,.]/g, function (val) {
        return val === ',' ? chunkDelimiter : decimalDelimiter;
    });
    return currencySign + formatted;
  }

  private addCommas(nStr) {
    nStr += '';
    const x = nStr.split('.');
    let x1 = x[0];
    const x2 = x.length > 1 ? '.' + x[1] : '';
    const rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
  }
}
