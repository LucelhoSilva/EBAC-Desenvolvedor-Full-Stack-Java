// Classe Concecionaria
function Concecionaria(nome, endereco) {
  this.nome = nome;
  this.endereco = endereco;
  this.funcionarios = [];
  this.carros = [];
}

// Métodos da classe Concecionaria
Concecionaria.prototype.adicionarFuncionario = function(funcionario) {
  this.funcionarios.push(funcionario);
}

Concecionaria.prototype.adicionarCarro = function(carro) {
  this.carros.push(carro);
}

Concecionaria.prototype.listarCarros = function() {
  console.log(`Carros disponíveis na ${this.nome}:`);
  this.carros.forEach(carro => {
    console.log(`${carro.marca} ${carro.modelo} (${carro.ano}) - R$${carro.getPreco()}`);
  });
}

// Classe Funcionario
function Funcionario(nome, endereco, cargo, comissao) {
  this.nome = nome;
  this.endereco = endereco;
  this.cargo = cargo;
  let _comissao = comissao;
  let _totalComissao = 0;

  this.getComissao = function() {
    return _comissao;
  }

  this.getTotalComissao = function() {
    return _totalComissao;
  }

  this.venderCarro = function(carro) {
    const valorComissao = carro.getPreco() * (_comissao / 100);
    _totalComissao += valorComissao;
    console.log(`${this.nome} vendeu o carro ${carro.modelo} da marca ${carro.marca} e ganhou R$${valorComissao.toFixed(2)} de comissão.`);
  }
}

// Classe Carro
function Carro(nome, endereco, modelo, marca, ano, preco) {
  this.nome = nome;
  this.endereco = endereco;
  this.modelo = modelo;
  this.marca = marca;
  this.ano = ano;
  let _preco = preco;

  this.getPreco = function() {
    return _preco;
  }

  this.setPreco = function(valor) {
    if (typeof valor === 'number') {
      _preco = valor;
    }
  }
}

// Instâncias
const concecionariaX = new Concecionaria("Concecionária X", "Av. Principal, 123");
const funcionario1 = new Funcionario("João", "Av. Principal, 123", "Vendedor", 5); // Comissão de 5%
const carro1 = new Carro("Concecionária X", "Av. Principal, 123", "Civic", "Honda", 2023, 120000);
const carro2 = new Carro("Concecionária X", "Av. Principal, 123", "Corolla", "Toyota", 2023, 130000);
const carro3 = new Carro("Concecionária X", "Av. Principal, 123", "Golf", "Volkswagen", 2023, 110000);

// Adiciona funcionários e carros à concessionária
concecionariaX.adicionarFuncionario(funcionario1);
concecionariaX.adicionarCarro(carro1);
concecionariaX.adicionarCarro(carro2);
concecionariaX.adicionarCarro(carro3);

// Ações
concecionariaX.listarCarros();
funcionario1.venderCarro(carro1);
funcionario1.venderCarro(carro2);
funcionario1.venderCarro(carro3);

// Exibe o total de comissão do funcionário
console.log(`Total de comissão de ${funcionario1.nome}: R$${funcionario1.getTotalComissao().toFixed(2)}`);
