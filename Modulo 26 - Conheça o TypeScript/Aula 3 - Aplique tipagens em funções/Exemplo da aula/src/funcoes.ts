function calculaArea(largura: number, altura: number): number {
  return largura * altura
}

// Arrow Function
const calculaArea2 = (largura: number, altura: number): number => largura * altura

// Operador Rest
function somar(...numeros: number[]): void {
  // numeros.reduce()
  console.log(numeros)
}

// Union Types
function teste(): string | number {
  if (10 > 5) {
    return "Dez é maior que cinco"
  } else {
    return 5
  }
}

const resultadoDeTeste = teste()
