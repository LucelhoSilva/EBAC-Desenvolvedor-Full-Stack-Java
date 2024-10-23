## 📝 Aula 07: Conheça Interfaces

### ✅ Introdução

Nesta aula, você vai aprender sobre **interfaces** no TypeScript, um conceito muito importante para garantir que as classes sigam um contrato de implementação. Interfaces são ferramentas que ajudam a estruturar o código e garantir que certas classes implementem métodos e propriedades de maneira consistente.

### ✅ Objetivos

- Compreender o conceito de **interfaces** e sua importância.
- Implementar **interfaces** em classes.
- Explorar a flexibilidade das **interfaces** e como elas podem ser estendidas.

### ✅ O que são Interfaces?

Uma **interface** em TypeScript define um conjunto de regras que uma classe deve seguir. Ela descreve os métodos e propriedades que uma classe deve ter, mas não define a implementação desses métodos. Isso permite que diferentes classes implementem as mesmas interfaces de maneiras variadas.

As interfaces são especialmente úteis para definir contratos claros em seu código, garantindo que as classes sigam um padrão esperado.

### ✅ Implementando uma Interface em Classes

Vamos ver um exemplo de como implementar uma interface em uma classe.

```typescript
interface ITransacional {
  transferir: (valor: number, contaDestino: Conta) => boolean;
  taxaTranferencia: number;
}

class Conta {
  numeroDaConta: number;
  saldo: number = 0;

  constructor(numeroDaConta: number) {
    this.numeroDaConta = numeroDaConta;
  }
}

class ContaSalario extends Conta {
  depositar(valor: number) {
    this.saldo += valor;
  }
}

class ContaCorretente extends Conta implements ITransacional {
  taxaTranferencia: number = 5;

  transferir(valor: number, contaDestino: Conta): boolean {
    if (this.saldo >= valor + this.taxaTranferencia) {
      this.saldo -= valor + this.taxaTranferencia;
      contaDestino.saldo += valor;
      return true;
    }
    return false;
  }
}
```

No exemplo acima:
- Criamos a interface `ITransacional`, que define que qualquer classe que a implemente deve ter um método `transferir` e uma propriedade `taxaTranferencia`.
- A classe `ContaCorretente` implementa a interface `ITransacional`, seguindo o contrato exigido pela interface.

### ✅ Usando Várias Interfaces

Uma classe pode implementar mais de uma interface, o que permite que você crie contratos flexíveis e modulares.

```typescript
interface IExemplo2 {
  cnpj: string;
}

interface IExemplo3 extends IExemplo2 {
  telefone: number;
}

class Empresa implements IExemplo3 {
  cnpj: string;
  telefone: number;

  constructor(cnpj: string, telefone: number) {
    this.cnpj = cnpj;
    this.telefone = telefone;
  }
}
```

Nesse exemplo:
- A interface `IExemplo3` estende `IExemplo2`, o que significa que qualquer classe que implemente `IExemplo3` deve ter tanto as propriedades de `IExemplo2` quanto as de `IExemplo3`.
- A classe `Empresa` implementa a interface `IExemplo3`, garantindo que tenha as propriedades `cnpj` e `telefone`.

### ✅ Estendendo Interfaces

Uma interface pode estender outra, permitindo que você crie interfaces mais especializadas a partir de interfaces genéricas.

```typescript
interface IExemplo2 {
  cnpj: string;
}

interface IExemplo3 extends IExemplo2 {
  telefone: number;
}
```

No exemplo acima, `IExemplo3` herda as propriedades de `IExemplo2`, adicionando novos requisitos além dos já definidos.

### ✅ Benefícios das Interfaces

1. **Consistência**: Interfaces garantem que as classes sigam um padrão, evitando erros.
2. **Flexibilidade**: Classes diferentes podem implementar a mesma interface de formas variadas, garantindo flexibilidade no design do código.
3. **Facilidade de manutenção**: Com interfaces, fica mais fácil substituir uma classe por outra, contanto que ambas sigam o mesmo contrato.

### ✅ Conclusão

As **interfaces** são uma ferramenta poderosa no TypeScript para garantir que seu código seja consistente e previsível. Elas permitem que você defina contratos que classes devem seguir, promovendo flexibilidade e manutenção. Agora que você compreende o uso de interfaces, pode aplicá-las para criar sistemas mais organizados e escaláveis.