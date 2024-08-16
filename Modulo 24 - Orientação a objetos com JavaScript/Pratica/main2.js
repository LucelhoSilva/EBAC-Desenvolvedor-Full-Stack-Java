// Usando o método call para reutilizar o código e tambem o metodo constructor

function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  
    this.apresentar = function () {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}
  
function Estudante(nome, idade, curso) {
    Pessoa.call(this, nome, idade);
    this.curso = curso;
  
    this.estudar = function () {
      console.log(`${this.nome} está estudando ${this.curso}`);
    }
}

function Professor(nome, idade, disciplina) {
    Pessoa.call(this, nome, idade);
    this.disciplina = disciplina;
  
    this.ensinar = function () {
      console.log(`${this.nome} está ensinando ${this.disciplina}`);
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