import {} from 'jasmine';
import { CpfFormat } from './cpf.pipe';

describe('CPFFormatPipe', () => {

  let pipe: CpfFormat;

  beforeEach(async () => {
    pipe = new CpfFormat();
  });

  it('should return a valid \'cpf\' formatted correctly', () => {
    expect(pipe.transform('32726532950')).toBe('327.265.329-50');
  });

  it('should return empty for a null \'cpf\'', () => {
    expect(pipe.transform(null)).toBe('');
    expect(pipe.transform('')).toBe('');
  });

});
