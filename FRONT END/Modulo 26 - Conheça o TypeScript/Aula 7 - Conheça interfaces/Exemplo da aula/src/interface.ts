class Conta {
  numeroDaConta: number
  saldo: number = 0

  constructor(numeroDaConta: number) {
    this.numeroDaConta = numeroDaConta
  }
}

class ContaSalario extends Conta {
  depositar(valor: number) {
    this.saldo += valor
  }
}

interface ITransacional {
  transferir: (valor: number, contaDestino: Conta) => boolean
  taxaTranferencia: number
}

interface IExemplo2{
  cnpj: string;
}

interface IExemplo3 extends IExemplo2{
  telefone: number;
}

class ContaCorretente extends Conta implements ITransacional {
  transferir(valor: number, contaDestino: Conta) {
    contaDestino.saldo += (valor - this.taxaTranferencia);
    return true
  }
  taxaTranferencia: number = 0
}