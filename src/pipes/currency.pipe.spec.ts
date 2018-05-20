import {} from 'jasmine';
import { CurrencyFormat } from './currency.pipe';

describe('CurrencyFormatPipe', () => {

  let pipe: CurrencyFormat;

  beforeEach(async () => {
    pipe = new CurrencyFormat();
  });

  /* Default Behavior */
  it('should return an integer value formatted correctly in the default currency', () => {
    expect(pipe.transform(10105)).toBe('R$ 10.105,00');
  });

  it('should return a decimal value formatted correctly in the default currency', () => {
    expect(pipe.transform(10105.2)).toBe('R$ 10.105,20');
  });

  it('should return zero formatted in the default currency for a null or zero value', () => {
    expect(pipe.transform(null)).toBe('R$ 0,00');
    expect(pipe.transform(0)).toBe('R$ 0,00');
  });

  /* Different Currency */
  it('should return an integer value formatted correctly in the selected currency', () => {
    expect(pipe.transform(10105, '(R$)')).toBe('(R$)10.105,00');
  });

  it('should return a decimal value formatted correctly in the selected currency', () => {
    expect(pipe.transform(10105.2, '(R$)')).toBe('(R$)10.105,20');
  });

  it('should return zero formatted in the selected currency for a null or zero value', () => {
    expect(pipe.transform(null, '(R$)')).toBe('(R$)0,00');
    expect(pipe.transform(0, '(R$)')).toBe('(R$)0,00');
  });

  /* Different Delimiters */
  it('should return an integer value formatted correctly with the selected delimiters', () => {
    expect(pipe.transform(10105, 'R$ ', ',', '.')).toBe('R$ 10,105.00');
  });

  it('should return a decimal value formatted correctly with the selected delimiters', () => {
    expect(pipe.transform(10105.2, 'R$ ', ',', '.')).toBe('R$ 10,105.20');
  });

  it('should return zero formatted with the selected delimiters for a null or zero value', () => {
    expect(pipe.transform(null, 'R$ ', ',', '.')).toBe('R$ 0.00');
    expect(pipe.transform(0, 'R$ ', ',', '.')).toBe('R$ 0.00');
  });

});
