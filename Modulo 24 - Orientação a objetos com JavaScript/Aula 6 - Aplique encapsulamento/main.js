function Pessoa(nome) {
    this.nome = nome;
    this.dizOi = function() {
        console.log(this.nome + ' diz olá');
    }
}

function Funcionario(nome, cargo, salario) {
    this.cargo = cargo;
    let _salario = salario; // atributo privado
  
    // getters e setters
    this.getSalario = function() { // convenção de metodos get ;é um metodo que retorna um valor
        return `O salário de ${this.nome} é ${_salario}`;
    }

    this.setSalario = function(valor) { // convenção de metodos set ;é um metodo que altera um valor
        if(typeof valor == 'number') {
            _salario = valor;
        }
    }

    this.dizCargo = function() {
        console.log(this.cargo)
    }

    Pessoa.call(this, nome);
}

const pessoa1 = new Pessoa('Maria');
const funcionario1 = new Funcionario('Maria', 'dev front-end', 5000);

funcionario1.setSalario(7000); // altera o valor do salario
console.log(funcionario1.getSalario());

// Encapsulamento

// Encapsulamento é o conceito de proteger os atributos de uma classe, ou seja, não permitir que eles sejam acessados diretamente de fora da classe. Para isso, podemos utilizar o conceito de atributos privados, que são acessíveis apenas de dentro da classe.

// salario com a anotação . nao é acessivel por ser um atributo privado, apenas por metodos get e set que são publicos e acessiveis de fora da classe Funcionario (encapsulamento)