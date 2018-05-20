import {} from 'jasmine';
import { CnpjFormat } from './cnpj.pipe';

describe('CNPJFormatPipe', () => {

  let pipe: CnpjFormat;

  beforeEach(async () => {
    pipe = new CnpjFormat();
  });

  it('should return a valid \'cnpj\' formatted correctly', () => {
    expect(pipe.transform('82784304000151')).toBe('82.784.304/0001-51');
  });

  it('should return empty for a null \'cnpj\'', () => {
    expect(pipe.transform(null)).toBe('');
    expect(pipe.transform('')).toBe('');
  });

});
