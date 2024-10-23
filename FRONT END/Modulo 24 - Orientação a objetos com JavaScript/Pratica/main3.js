class Animal {
  constructor(nome) {
    this.nome = nome;
  }

  emitirSom() {
    console.log("Som genérico de animal");
  }
}

class Cachorro extends Animal {
  emitirSom() {
    console.log("Au au!"); 
  }
}

class Gato extends Animal {
  emitirSom() {
    console.log("Miau!"); 
  }
}

const meuCachorro = new Cachorro("Rex");
meuCachorro.emitirSom();

const meuGato = new Gato("Mimi");
meuGato.emitirSom();