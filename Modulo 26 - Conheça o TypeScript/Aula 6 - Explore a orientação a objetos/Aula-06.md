## 📝 Aula 06: Explore a Orientação a Objetos

### ✅ Introdução

Nesta aula, você vai aprender sobre os conceitos fundamentais de **orientação a objetos** (OO) em TypeScript, incluindo **modificadores de acesso**, **encapsulamento**, **herança**, e **polimorfismo**. Esses conceitos são essenciais para a construção de aplicações organizadas, reutilizáveis e seguras.

### ✅ Objetivos

- Compreender os conceitos de **orientação a objetos**.
- Aplicar **modificadores de acesso** como `public`, `private`, `protected` e `static`.
- Utilizar **herança** para estender funcionalidades entre classes.
- Explorar o **encapsulamento** para proteger os dados.

### ✅ Conceitos de Orientação a Objetos

A **orientação a objetos** é um paradigma de programação baseado na ideia de objetos que possuem propriedades e métodos. Esses objetos podem ser reutilizados e organizados em hierarquias, facilitando a manutenção e a escalabilidade do código.

#### Principais Conceitos:

1. **Classes**: Moldes que definem as propriedades e comportamentos de um objeto.
2. **Objetos**: Instâncias de classes.
3. **Herança**: Permite que uma classe herde propriedades e métodos de outra.
4. **Encapsulamento**: Protege os dados de uma classe, permitindo que sejam acessados apenas através de métodos apropriados.
5. **Polimorfismo**: Capacidade de diferentes classes derivadas de uma mesma classe base implementarem métodos de forma distinta.

### ✅ Criando uma Classe no TypeScript

Em TypeScript, a criação de classes segue uma estrutura simples, onde as propriedades precisam ser definidas antes do construtor. Vamos ver um exemplo básico:

```typescript
class Pessoa {
  nome: string
  renda?: number

  constructor(nome: string, renda?: number) {
    this.nome = nome
    this.renda = renda
  }

  dizOla(): string {
    return `Olá, eu sou ${this.nome}`
  }
}
```

Aqui, criamos a classe `Pessoa` com as propriedades `nome` e `renda`. O método `dizOla` retorna uma saudação personalizada.

### ✅ Modificadores de Acesso

Os **modificadores de acesso** controlam a visibilidade das propriedades e métodos de uma classe. No TypeScript, temos quatro principais modificadores:

1. **public**: Propriedades e métodos que podem ser acessados de qualquer lugar (padrão no TypeScript).
2. **private**: Propriedades e métodos que só podem ser acessados dentro da própria classe.
3. **protected**: Propriedades e métodos que podem ser acessados dentro da própria classe e de classes que a estendam (herança).
4. **static**: Propriedades e métodos que podem ser acessados sem a necessidade de instanciar a classe.

#### Exemplo com Modificadores de Acesso:

```typescript
class ContaBancaria {
  protected saldo: number = 0 // Modificador `protected`, acessível nas subclasses.
  public numeroConta: number // Modificador `public`, acessível de qualquer lugar.

  constructor(numeroConta: number) {
    this.numeroConta = numeroConta
  }

  static retornaNumeroDoBanco(): number {
    return 123 // Método estático, acessível sem instanciar a classe.
  }

  private getSaldo(): number {
    return this.saldo // Modificador `private`, só acessível dentro desta classe.
  }

  setSaldo(valor: number) {
    this.saldo += valor // Método público para alterar o saldo.
  }
}
```

No exemplo acima:

- O `saldo` é **protected**, ou seja, ele pode ser acessado apenas pela classe `ContaBancaria` e suas subclasses.
- O `numeroConta` é **public**, o que significa que pode ser acessado de qualquer parte do código.
- O método `getSaldo` é **private**, então apenas a classe `ContaBancaria` pode acessá-lo.
- O método **static** `retornaNumeroDoBanco` pode ser acessado diretamente pela classe, sem necessidade de criar uma instância.

### ✅ Herança

A **herança** permite que uma classe (subclasse) herde propriedades e métodos de outra classe (superclasse), promovendo a reutilização de código.

#### Exemplo de Herança:

```typescript
class ContaBancariaPessoaFisica extends ContaBancaria {
  setSaldo(valor: number): void {
    this.saldo = valor * 2 // Acesso ao `saldo` através do modificador `protected`.
  }
}
```

Aqui, a classe `ContaBancariaPessoaFisica` herda de `ContaBancaria` e sobrescreve o método `setSaldo` para aplicar uma lógica personalizada.

### ✅ Polimorfismo

O **polimorfismo** permite que métodos nas subclasses sejam implementados de maneira diferente, mesmo que tenham o mesmo nome que na classe base.

#### Exemplo de Polimorfismo:

No exemplo anterior, a classe `ContaBancariaPessoaFisica` altera o comportamento do método `setSaldo`, duplicando o valor passado. Isso é polimorfismo em ação — o mesmo método pode ter implementações diferentes em subclasses.

### ✅ Encapsulamento

O **encapsulamento** é uma prática que visa proteger as informações sensíveis de uma classe, permitindo que elas sejam manipuladas apenas por métodos específicos, sem acesso direto a essas informações.

```typescript
class ContaBancaria {
  private saldo: number = 0

  setSaldo(valor: number) {
    this.saldo += valor
  }

  getSaldo(): number {
    return this.saldo
  }
}
```

Aqui, o `saldo` é privado, e só pode ser modificado ou acessado através dos métodos `setSaldo` e `getSaldo`.

### ✅ Conclusão

Nesta aula, você aprendeu os fundamentos da **orientação a objetos** no TypeScript. Aplicar **modificadores de acesso** como `private`, `public`, `protected` e `static` ajuda a proteger e organizar o código. O uso de **herança** e **polimorfismo** permite a criação de estruturas flexíveis e reutilizáveis.
