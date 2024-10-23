"use strict";
class Conta {
    constructor(numeroDaConta) {
        this.saldo = 0;
        this.numeroDaConta = numeroDaConta;
    }
}
class ContaSalario extends Conta {
    depositar(valor) {
        this.saldo += valor;
    }
}
class ContaCorretente extends Conta {
    constructor() {
        super(...arguments);
        this.taxaTranferencia = 0;
    }
    transferir(valor, contaDestino) {
        contaDestino.saldo += (valor - this.taxaTranferencia);
        return true;
    }
}
