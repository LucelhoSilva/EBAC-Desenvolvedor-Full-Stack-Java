function Pessoa(nome) {
    this.nome = nome;
    this.dizOi = function() {
        console.log(this.nome + ' diz olá');
    }
    this.dizCargo = function() {
        console.log(this.cargo) // mesmo que esses atributos nao estaja presente na função construtura pessoa, ele pode ser acessado
    }
}

function Funcionario(nome, cargo, salario) {
    this.cargo = cargo;
    this.salario = salario;

    Pessoa.call(this, nome); // chamamos a função construtora com .call, aplica o contexto de Pessoa para Funcionario (herança)
}

const pessoa1 = new Pessoa('Maria');
const funcionario1 = new Funcionario('Maria', 'dev front-end', 5000);
funcionario1.dizOi();
funcionario1.dizCargo();

console.log(pessoa1);
console.log(funcionario1);