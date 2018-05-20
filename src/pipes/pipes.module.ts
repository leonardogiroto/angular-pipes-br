import { NgModule } from '@angular/core';
import { CurrencyFormat } from './currency.pipe';
import { CpfFormat } from './cpf.pipe';
import { CnpjFormat } from './cnpj.pipe';
import { CepFormat } from './cep.pipe';

@NgModule({
  declarations: [
    CurrencyFormat,
    CpfFormat,
    CnpjFormat,
    CepFormat
  ],
  exports: [
    CurrencyFormat,
    CpfFormat,
    CnpjFormat,
    CepFormat
  ]
})
export class PipesModule { }
