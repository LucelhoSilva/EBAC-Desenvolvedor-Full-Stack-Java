class Pessoa {
    constructor(nome, idade) {
        if (this.constructor === Pessoa) {
            throw new Error("Pessoa é uma classe abstrata e não pode ser instanciada diretamente.");
        }
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}

// Classe Estudante, herdeira de Pessoa
class Estudante extends Pessoa {
    constructor(nome, idade, curso) {
        super(nome, idade);
        this.curso = curso;
    }

    estudar() {
        console.log(`${this.nome} está estudando ${this.curso}.`);
    }
}

// Classe Professor, herdeira de Pessoa
class Professor extends Pessoa {
    constructor(nome, idade, disciplina) {
        super(nome, idade);
        this.disciplina = disciplina;
    }

    ensinar() {
        console.log(`${this.nome} está ensinando ${this.disciplina}.`);
    }
}

// Criação de instâncias de objetos
const estudante1 = new Estudante("Maria", 20, "Engenharia");
const professor1 = new Professor("João", 35, "Matemática");
const estudante2 = new Estudante("Carlos", 22, "Ciências da Computação");

// Chamada de métodos
estudante1.apresentar(); 
estudante1.estudar(); 

professor1.apresentar(); 
professor1.ensinar(); 

estudante2.apresentar(); 
estudante2.estudar();