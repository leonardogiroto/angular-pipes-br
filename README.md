# angular-pipes-br

[![Build Status](https://travis-ci.org/leonardogiroto/angular-pipes-br.svg?branch=master)](https://travis-ci.org/leonardogiroto/angular-pipes-br)
[![Coverage Status](https://coveralls.io/repos/github/leonardogiroto/angular-pipes-br/badge.svg?branch=master)](https://coveralls.io/github/leonardogiroto/angular-pipes-br?branch=master)

Biblioteca de Pipes BR para `Angular 4/5/6`.

## Instalação

```
npm install angular-pipes-br --save
```

### Incluindo Módulo

```
import { PipesModule } from 'angular-pipes-br';

@NgModule({
    ...
    imports: [
      ...
      PipesModule
  ]
  ...
})
```

### Rodando Testes

```
npm install
npm test
```

## Uso

Utilizar como um pipe do Angular

	CPF:      {{ '12316560857' | cpfFormat }} 
	CNPJ:     {{ '48251874000148' | cnpjFormat }} 
	CEP:      {{ '30510410' | cepFormat }}
	Currency: {{ 100 | currencyFormat : 'R$ ' : '.' : ',' }}
	// (Símbolo : Divisor de Milhar : Divisor de Decimal)
