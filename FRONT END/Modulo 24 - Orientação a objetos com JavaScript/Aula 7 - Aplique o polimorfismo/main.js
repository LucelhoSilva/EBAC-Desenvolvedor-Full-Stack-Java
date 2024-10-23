function Pessoa(nome) {
    this.nome = nome;
    this.dizOi = function() {
        console.log(this.nome + ' diz olá');
    }
}

function Funcionario(nome, cargo, salario) {
    this.cargo = cargo;
    let _salario = salario;

    this.getSalario = function() {
        return _salario;
    }

    this.setSalario = function(valor) {
        if(typeof valor == 'number') {
            _salario = valor;
        }
    }

    this.aumento = function() {
        const novoSalario = _salario * 1.1;
        _salario = novoSalario;
    }

    this.dizCargo = function() {
        console.log(this.cargo)
    }

    Pessoa.call(this, nome);
}

// Polimorfismo cossite em criar novas classes que herdam de uma classe pai e sobrescrevem métodos, ou seja executar o mesmo método de forma diferente
function Estagiario(nome) {
    Funcionario.call(this, nome, 'Estagiario', 2000);

    this.aumento = function() {
        const novoSalario = this.getSalario() * 1.07;
        this.setSalario(novoSalario)
    }
}
// Polimorfismo cossite em criar novas classes que herdam de uma classe pai e sobrescrevem métodos, ou seja executar o mesmo método de forma diferente
function Gerente(nome) {
    Funcionario.call(this, nome, 'Gerente', 10000);

    this.aumento = function() {
        const novoSalario = this.getSalario() * 1.15;
        this.setSalario(novoSalario)
    }
}

// Polimorfismo cossite em criar novas classes que herdam de uma classe pai e sobrescrevem métodos, ou seja executar o mesmo método de forma diferente
function Analista(nome) {
    Funcionario.call(this, nome, 'Analista', 7000);

    this.aumento = function() {
        const novoSalario = this.getSalario() * 1.12;
        this.setSalario(novoSalario)
    }
}

// Polimorfismo cossite em criar novas classes que herdam de uma classe pai e sobrescrevem métodos, ou seja executar o mesmo método de forma diferente
function Diretor(nome) {
  Funcionario.call(this, nome, 'Diretor', 15000);
  
  this.aumento = function () {
    const novoSalario = this.getSalario() * 1.20;
    this.setSalario(novoSalario);
  }
}

// Polimorfismo cossite em criar novas classes que herdam de uma classe pai e sobrescrevem métodos, ou seja executar o mesmo método de forma diferente
function Presidente(nome) {
  Funcionario.call(this, nome, 'Presidente', 30000);
  
  this.aumento = function () {
    const novoSalario = this.getSalario() * 1.25;
    this.setSalario(novoSalario);
  }
}

// Polimorfismo cossite em criar novas classes que herdam de uma classe pai e sobrescrevem métodos, ou seja executar o mesmo método de forma diferente
function JovemAprendiz(nome) {
  Funcionario.call(this, nome, 'Jovem Aprendiz', 1000);

  this.aumento = function () {
    const novoSalario = this.getSalario() * 1.0;
    this.setSalario(novoSalario);
  }
}

const funcionario1 = new Funcionario('Maria', 'dev front-end', 5000);
const funcionario2 = new Estagiario('Joao');
const funcionario3 = new Gerente('Bruno');
const funcionario4 = new Analista('Lucas');
const funcionario5 = new Diretor('Carlos');
const funcionario6 = new Presidente('Pedro');
const funcionario7 = new JovemAprendiz('Paulo');

funcionario1.aumento();
console.log(funcionario1.getSalario());

funcionario2.aumento();
console.log(funcionario2.getSalario());

funcionario3.aumento();
console.log(funcionario3.getSalario());

funcionario4.aumento();
console.log(funcionario4.getSalario());

funcionario5.aumento();
console.log(funcionario5.getSalario());

funcionario6.aumento();
console.log(funcionario6.getSalario());

funcionario7.aumento();
console.log(funcionario7.getSalario());