## 📝 Aula 07: Compreenda a Programação Orientada a Objetos

### ✅ Introdução à Programação Orientada a Objetos (POO)

Nesta aula, você vai entender os conceitos fundamentais da **Programação Orientada a Objetos (POO)** em JavaScript, que foi formalizada com a introdução de classes no **ES6**. POO permite organizar o código de maneira mais estruturada e modular, facilitando a reutilização e a manutenção.

### ✅ Objetivos

- Compreender o conceito de POO em JavaScript.
- Usar **classes** e **herança** em ES6.
- Entender o conceito de **encapsulamento de dados** e como aplicá-lo.

### ✅ O que é Programação Orientada a Objetos?

A POO é um paradigma de programação que utiliza **objetos** — instâncias de **classes** — para representar conceitos do mundo real. Esses objetos possuem **propriedades** (atributos) e **métodos** (funções associadas).

- **Classe**: É um modelo que define a estrutura de um objeto.
- **Objeto**: Uma instância de uma classe.
- **Herança**: Capacidade de uma classe herdar propriedades e métodos de outra.
- **Encapsulamento**: Prática de esconder detalhes internos de um objeto, expondo apenas o necessário.

### ✅ Programação Orientada a Objetos antes do ES6

Antes do ES6, a POO em JavaScript era implementada através de **funções construtoras**.

#### Exemplo de Função Construtora:

```javascript
function Pokemon(nomePokemon, tipoPokemon) {
  this.nome = nomePokemon
  this.tipo = tipoPokemon
}

const charizard = new Pokemon("Charizard", "Fogo")
```

Aqui, `Pokemon` é uma função construtora que cria novos objetos com `nome` e `tipo`. Essa abordagem, embora funcional, não oferece suporte nativo a muitas funcionalidades da POO moderna, como herança simplificada e encapsulamento.

### ✅ Programação Orientada a Objetos pós ES6

Com o ES6, o JavaScript introduziu **classes**, facilitando a implementação de POO.

#### Exemplo de Classe em ES6:

```javascript
class Pokemon {
  #hp = 100 // Propriedade privada

  constructor(nomePokemon, tipoPokemon) {
    this.nome = nomePokemon
    this.tipo = tipoPokemon
  }

  atacar(nomeAtk) {
    console.log(`${this.nome} atacou com ${nomeAtk}`)
  }

  recebeuAtaque() {
    this.#hp -= 10
  }

  exibirHp() {
    console.log(this.#hp)
  }
}
```

Nesse exemplo:

- `#hp` é um atributo **privado**, ou seja, não pode ser acessado diretamente fora da classe.
- A classe possui um **método** `atacar` que imprime uma mensagem no console, e outro método `recebeuAtaque` que altera o valor de `#hp`.

### ✅ Herança em Classes

A **herança** permite que uma classe derive de outra, herdando seus métodos e propriedades.

#### Exemplo de Herança:

```javascript
class Charizard extends Pokemon {
  constructor() {
    super("Charizard", "Fogo") // Chama o construtor da classe base
  }

  atacar() {
    console.log(`${this.nome} atacou com Explosão de Fogo`)
  }
}
```

Aqui, a classe `Charizard` herda da classe `Pokemon`, mas sobrescreve o método `atacar` para adicionar uma funcionalidade específica.

### ✅ Encapsulamento de Dados

O **encapsulamento** é o conceito de esconder detalhes internos de um objeto e expor apenas o que for necessário. No JavaScript moderno, isso pode ser feito utilizando **propriedades privadas** (prefixadas com `#`).

#### Exemplo de Encapsulamento:

```javascript
charizardDoAsh.recebeuAtaque()
charizardDoAsh.exibirHp() // Exibe o HP atualizado
```

Neste exemplo, `#hp` é uma propriedade privada. O valor de `#hp` só pode ser modificado por métodos dentro da classe, como `recebeuAtaque`, e acessado por métodos como `exibirHp`.

### ✅ Conclusão

A **Programação Orientada a Objetos (POO)** em JavaScript, especialmente após o ES6, é uma poderosa maneira de organizar e estruturar o código. A utilização de **classes**, **herança** e **encapsulamento** torna o desenvolvimento mais organizado e facilita a manutenção de código em projetos maiores. Ao dominar esses conceitos, você será capaz de escrever código mais robusto, reutilizável e escalável.

Explore e pratique a criação de classes e objetos em seus projetos para desenvolver suas habilidades em POO!
