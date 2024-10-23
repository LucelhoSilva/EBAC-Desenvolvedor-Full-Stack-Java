## 📝 Aula 07: Aplique o Polimorfismo

### ✅ Introdução ao Polimorfismo na Programação Orientada a Objetos

Nesta aula, você aprenderá sobre o conceito de polimorfismo na programação orientada a objetos (POO) e como implementá-lo em JavaScript. O polimorfismo é um princípio fundamental que permite que classes derivadas de uma mesma classe base possam sobrescrever métodos para alterar ou ampliar seu comportamento.

### ✅ Objetivos

-   Compreender o conceito de polimorfismo na programação orientada a objetos;
-   Aprender como aplicar o polimorfismo em JavaScript;
-   Explorar os benefícios do polimorfismo na organização do código.

### ✅ Conceito de Polimorfismo

O polimorfismo permite que diferentes classes utilizem o mesmo método de maneiras distintas. Em JavaScript, isso é alcançado criando subclasses que herdam de uma classe pai e sobrescrevem os métodos da classe base para executar comportamentos específicos.

### ✅ Implementação de Polimorfismo em JavaScript

#### Exemplo de Polimorfismo com `Funcionario`, `Estagiario`, `Gerente`, `Analista`, `Diretor`, `Presidente`, e `JovemAprendiz`

```javascript
function Pessoa(nome) {
    this.nome = nome
    this.dizOi = function () {
        console.log(this.nome + " diz olá")
    }
}

function Funcionario(nome, cargo, salario) {
    this.cargo = cargo
    let _salario = salario

    this.getSalario = function () {
        return _salario
    }

    this.setSalario = function (valor) {
        if (typeof valor === "number") {
            _salario = valor
        }
    }

    this.aumento = function () {
        const novoSalario = _salario * 1.1
        _salario = novoSalario
    }

    this.dizCargo = function () {
        console.log(this.cargo)
    }

    Pessoa.call(this, nome)
}

// Polimorfismo: Sobrescrevendo o método `aumento` para cada classe específica

function Estagiario(nome) {
    Funcionario.call(this, nome, "Estagiario", 2000)

    this.aumento = function () {
        const novoSalario = this.getSalario() * 1.07
        this.setSalario(novoSalario)
    }
}

function Gerente(nome) {
    Funcionario.call(this, nome, "Gerente", 10000)

    this.aumento = function () {
        const novoSalario = this.getSalario() * 1.15
        this.setSalario(novoSalario)
    }
}

function Analista(nome) {
    Funcionario.call(this, nome, "Analista", 7000)

    this.aumento = function () {
        const novoSalario = this.getSalario() * 1.12
        this.setSalario(novoSalario)
    }
}

function Diretor(nome) {
    Funcionario.call(this, nome, "Diretor", 15000)

    this.aumento = function () {
        const novoSalario = this.getSalario() * 1.2
        this.setSalario(novoSalario)
    }
}

function Presidente(nome) {
    Funcionario.call(this, nome, "Presidente", 30000)

    this.aumento = function () {
        const novoSalario = this.getSalario() * 1.25
        this.setSalario(novoSalario)
    }
}

function JovemAprendiz(nome) {
    Funcionario.call(this, nome, "Jovem Aprendiz", 1000)

    this.aumento = function () {
        const novoSalario = this.getSalario() * 1.0
        this.setSalario(novoSalario)
    }
}
```

Neste exemplo, o método `aumento` é sobrescrito em cada uma das subclasses (`Estagiario`, `Gerente`, `Analista`, etc.) para aplicar diferentes lógicas de aumento salarial, demonstrando o polimorfismo em ação.

### ✅ Benefícios do Polimorfismo

O polimorfismo oferece várias vantagens:

-   **Flexibilidade**: Permite que diferentes objetos possam ser tratados de maneira uniforme, facilitando a reutilização de código.
-   **Extensibilidade**: Novas classes podem ser adicionadas com comportamentos específicos sem modificar o código existente, seguindo o princípio de código aberto/fechado.
-   **Organização**: Facilita a organização do código, permitindo que comportamentos comuns sejam agrupados em uma classe base e comportamentos específicos sejam implementados em subclasses.

### ✅ Prática de Polimorfismo

```javascript
const funcionario1 = new Funcionario("Maria", "dev front-end", 5000)
const funcionario2 = new Estagiario("Joao")
const funcionario3 = new Gerente("Bruno")
const funcionario4 = new Analista("Lucas")
const funcionario5 = new Diretor("Carlos")
const funcionario6 = new Presidente("Pedro")
const funcionario7 = new JovemAprendiz("Paulo")

funcionario1.aumento()
console.log(funcionario1.getSalario())

funcionario2.aumento()
console.log(funcionario2.getSalario())

funcionario3.aumento()
console.log(funcionario3.getSalario())

funcionario4.aumento()
console.log(funcionario4.getSalario())

funcionario5.aumento()
console.log(funcionario5.getSalario())

funcionario6.aumento()
console.log(funcionario6.getSalario())

funcionario7.aumento()
console.log(funcionario7.getSalario())
```

Neste exemplo, cada classe específica (`Estagiario`, `Gerente`, `Analista`, etc.) aplica um aumento salarial diferenciado, apesar de todas as classes compartilharem a mesma interface (`aumento`). Isso demonstra como o polimorfismo facilita a extensibilidade e a flexibilidade do código.
