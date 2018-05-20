# angular-pipes-br

**angular-pipes-br** é uma biblioteca de Pipes para `Angular 4/5/6`.

## Instalação

```
npm install angular-pipes --save
```

### Rodando Testes

```
npm install
npm test
```

## Uso

Utilizar normalmente como um pipe do Angular.

	CPF:      {{ '12316560857' | cpfFormat }} 
	CNPJ:     {{ '48251874000148' | cnpjFormat }} 
	CEP:      {{ '30510410' | cepFormat }}
	Currency: {{ 100 | currencyFormat : 'R$ ' : '.' : ',' }}
	// (Símbolo : Divisor de Milhar : Divisor de Decimal)
