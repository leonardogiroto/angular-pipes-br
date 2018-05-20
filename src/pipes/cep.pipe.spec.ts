import {} from 'jasmine';
import { CepFormat } from './cep.pipe';

describe('CEPFormatPipe', () => {

  let pipe: CepFormat;

  beforeEach(async () => {
    pipe = new CepFormat();
  });

  it('should return a valid \'cep\' formatted correctly', () => {
    expect(pipe.transform('22630010')).toBe('22630-010');
  });

  it('should return empty for a null \'cep\'', () => {
    expect(pipe.transform(null)).toBe('');
    expect(pipe.transform('')).toBe('');
  });

});
