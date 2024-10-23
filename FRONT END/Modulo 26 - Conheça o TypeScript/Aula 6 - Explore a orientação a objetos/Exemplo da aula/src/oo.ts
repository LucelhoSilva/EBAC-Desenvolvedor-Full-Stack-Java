class Pessoa {
  nome: string
  renda?: number

  constructor(nome: string, renda?: number) {
    this.nome = nome
    this.renda = renda
  }

  dizOla(): string {
    return `Olá, eu sou ${this.nome}`
  }
}

class ContaBancaria {
  protected saldo: number = 0
  public numeroConta: number

  constructor(numeroConta: number) {
    this.numeroConta = numeroConta
  }

  static retornaNumeroDoBanco(): number {
    return 123
  }

  private getSaldo(): number {
    return this.saldo
  }

  setSaldo(valor: number) {
    this.saldo += valor
  }
}

class ContaBancariaPessoaFisica extends ContaBancaria {
  setSaldo(valor: number): void {
    this.saldo = valor * 2
  }
}

const contaDoLucelho = new ContaBancariaPessoaFisica(123456)
ContaBancaria.retornaNumeroDoBanco()
