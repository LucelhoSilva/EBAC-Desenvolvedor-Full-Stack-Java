## 📝 Aula 06: Aplique Encapsulamento

### ✅ Introdução ao Encapsulamento na Programação Orientada a Objetos

Nesta aula, você aprenderá sobre o conceito de encapsulamento na programação orientada a objetos (POO) e como implementá-lo em JavaScript. O encapsulamento é uma técnica fundamental que ajuda a proteger os dados e a controlar o acesso a eles, tornando o código mais seguro e modular.

### ✅ Objetivos

-   Compreender o conceito de encapsulamento na programação orientada a objetos;
-   Aprender como implementar encapsulamento em JavaScript;
-   Explorar os benefícios do encapsulamento.

### ✅ Conceito de Encapsulamento

O encapsulamento é o princípio de restringir o acesso direto a certos atributos de um objeto, permitindo que eles sejam acessados e modificados apenas por meio de métodos específicos. Isso protege os dados sensíveis e promove uma melhor organização do código.

### ✅ Implementação de Encapsulamento em JavaScript

#### Exemplo de Encapsulamento com `Funcionario`

```javascript
function Pessoa(nome) {
    this.nome = nome
    this.dizOi = function () {
        console.log(this.nome + " diz olá")
    }
}

function Funcionario(nome, cargo, salario) {
    this.cargo = cargo
    let _salario = salario // Atributo privado

    // Getter para acessar o valor do salário
    this.getSalario = function () {
        return `O salário de ${this.nome} é ${_salario}`
    }

    // Setter para modificar o valor do salário
    this.setSalario = function (valor) {
        if (typeof valor === "number") {
            _salario = valor
        }
    }

    this.dizCargo = function () {
        console.log(this.cargo)
    }

    Pessoa.call(this, nome)
}
```

No exemplo acima, `_salario` é definido como um atributo privado, acessível apenas dentro da função `Funcionario`. Para interagir com `_salario`, usamos métodos `getSalario` e `setSalario`, que são públicos.

### ✅ Benefícios do Encapsulamento

O encapsulamento oferece várias vantagens:

-   **Proteção de Dados**: Ao manter certos atributos privados, você impede que eles sejam alterados diretamente de fora da classe, evitando comportamentos inesperados.
-   **Controle de Acesso**: Métodos `get` e `set` permitem controlar como os atributos são acessados e modificados, validando entradas e garantindo integridade.
-   **Modularidade**: Encapsular funcionalidades específicas dentro de métodos facilita a manutenção e atualização do código, uma vez que a lógica interna de uma classe não afeta outras partes do sistema.

### ✅ Prática de Encapsulamento

```javascript
const pessoa1 = new Pessoa("Maria")
const funcionario1 = new Funcionario("Maria", "dev front-end", 5000)

// Modificando o salário através do setter
funcionario1.setSalario(7000)

// Acessando o salário através do getter
console.log(funcionario1.getSalario()) // O salário de Maria é 7000
```

Neste exemplo, o atributo `_salario` não pode ser acessado diretamente, mas pode ser lido ou alterado utilizando os métodos públicos `getSalario` e `setSalario`. Isso demonstra como o encapsulamento promove a segurança dos dados.
