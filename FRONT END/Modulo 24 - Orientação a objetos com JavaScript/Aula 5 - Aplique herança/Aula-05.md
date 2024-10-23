## 📝 Aula 05: Aplique Herança

### ✅ Introdução à Herança na Programação Orientada a Objetos

Nesta aula, você aprenderá sobre o conceito de herança na programação orientada a objetos (POO) e como aplicá-lo em JavaScript. A herança permite que uma classe (subclasse) derive atributos e métodos de outra classe (superclasse), promovendo a reutilização de código e a organização.

### ✅ Objetivos

-   Compreender o conceito de herança na programação orientada a objetos.
-   Praticar a criação de classes e subclasses em JavaScript.
-   Entender a dinâmica de herança de atributos e métodos.

### ✅ Conceito de Herança

A herança em POO permite que uma classe herde características (atributos e métodos) de outra. Isso é útil para criar relações hierárquicas entre classes, onde subclasses podem herdar e estender o comportamento da superclasse.

### ✅ Criação de Classes e Subclasses

#### Exemplo de Superclasse `Pessoa`

```javascript
function Pessoa(nome) {
    this.nome = nome
    this.dizOi = function () {
        console.log(this.nome + " diz olá")
    }
    this.dizCargo = function () {
        console.log(this.cargo)
    }
}
```

A classe `Pessoa` define dois métodos: `dizOi`, que exibe uma saudação, e `dizCargo`, que exibe o cargo (se disponível).

#### Exemplo de Subclasse `Funcionario`

```javascript
function Funcionario(nome, cargo, salario) {
    this.cargo = cargo
    this.salario = salario

    Pessoa.call(this, nome) // Chama o construtor da classe Pessoa
}
```

A classe `Funcionario` herda de `Pessoa` utilizando o método `call`, que permite invocar o construtor de `Pessoa` no contexto de `Funcionario`, passando o nome como argumento.

### ✅ Prática de Herança

Após definir as classes, criamos instâncias para testar a herança:

```javascript
const pessoa1 = new Pessoa("Maria")
const funcionario1 = new Funcionario("Maria", "dev front-end", 5000)

funcionario1.dizOi() // Maria diz olá
funcionario1.dizCargo() // dev front-end

console.log(pessoa1) // Exibe a instância de Pessoa
console.log(funcionario1) // Exibe a instância de Funcionario
```

### ✅ Compreensão da Herança de Atributos e Métodos

No exemplo acima, a instância `funcionario1` herda o método `dizOi` da classe `Pessoa`, mas também possui seus próprios atributos e métodos definidos na classe `Funcionario`. Isso demonstra como a herança permite a combinação de comportamentos de diferentes classes, criando objetos mais complexos e funcionais.
