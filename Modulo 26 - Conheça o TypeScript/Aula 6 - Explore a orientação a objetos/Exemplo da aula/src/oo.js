"use strict";
class Pessoa {
    constructor(nome, renda) {
        this.nome = nome;
        this.renda = renda;
    }
    dizOla() {
        return `Olá, eu sou ${this.nome}`;
    }
}
class ContaBancaria {
    constructor(numeroConta) {
        this.saldo = 0;
        this.numeroConta = numeroConta;
    }
    static retornaNumeroDoBanco() {
        return 123;
    }
    getSaldo() {
        return this.saldo;
    }
    setSaldo(valor) {
        this.saldo += valor;
    }
}
class ContaBancariaPessoaFisica extends ContaBancaria {
    setSaldo(valor) {
        this.saldo = valor * 2;
    }
}
const contaDoLucelho = new ContaBancariaPessoaFisica(123456);
ContaBancaria.retornaNumeroDoBanco();
