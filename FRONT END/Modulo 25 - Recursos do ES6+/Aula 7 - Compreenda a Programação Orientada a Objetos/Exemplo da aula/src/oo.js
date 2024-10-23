// OO antes do ES6 A gente criava com função construtora 

// function Pokemon(nomePokemon, tipoPokemon) {
//     this.nome = nomePokemon;
//     this.tipo = tipoPokemon;
// }
// const charizard = new Pokemon('Charizard', 'Fogo');

// OO pós ES6
class Pokemon {
    #hp = 100;

    constructor(nomePokemon, tipoPokemon) {
        this.nome = nomePokemon;
        this.tipo = tipoPokemon;
    }

    atacar(nomeAtk) { // Método
        console.log(`${this.nome} atacou com ${nomeAtk}`);
    }
    recebeuAtaque() {
        this.#hp -= 10; // Usa-se # para declarar uma propriedade privada
    }
    exibirHp() {
        console.log(this.#hp);
    }
}

class Charizard extends Pokemon { // Usamos extends para herdar de outra classe
    constructor() {
        super('Charizard', 'Fogo')
    }

    atacar() {
        console.log(`${this.nome} atacou com Explosão de Fogo`);
    }
}

const charizardDoAsh = new Charizard();
const charizard = new Pokemon('Charizard', 'Fogo');
// charizard.atacar('Explosão de Fogo')
// charizard.nome = 'Charizard';
// charizard.tipo = 'Fogo';

console.log(charizard);
console.log(charizardDoAsh);
charizardDoAsh.recebeuAtaque();
charizardDoAsh.exibirHp();
charizardDoAsh.atacar();

console.log(charizardDoAsh instanceof Charizard);
console.log(charizardDoAsh instanceof Pokemon);