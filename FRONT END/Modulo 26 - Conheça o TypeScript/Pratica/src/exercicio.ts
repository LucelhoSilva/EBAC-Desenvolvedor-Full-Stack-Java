// Função de multiplicação
function multiplicar(num1: number, num2: number): number {
  return num1 * num2;
}

// Função de multiplicação com arrow function
const multiplicars = (num1: number, num2: number): number => num1 * num2;

// Função de saudação
function saudacao(nome: string): string {
  return `Olá, ${nome}`;
}

// Função de saudação com arrow function
const saudacaos = (nome: string): string => `Olá ${nome}`;

console.log(multiplicar(2, 3));
console.log(saudacao("Lucelho"));

console.log(multiplicars(5, 3));
console.log(saudacaos("Lucelho Silva"));