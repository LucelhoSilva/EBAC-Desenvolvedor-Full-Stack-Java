## 📝 Aula 05: Crie Repetições (Laços)

### ✅ O que são Laços (Loops)?

Os laços, também conhecidos como loops, são estruturas de controle que permitem executar um bloco de código repetidamente enquanto uma condição específica for verdadeira. Em JavaScript, existem várias formas de criar loops, incluindo `for`, `while` e `do...while`.

### ✅ Laço `for`

O laço `for` é utilizado quando sabemos antecipadamente quantas vezes queremos repetir uma ação.

```javascript
for (let i = 0; i < 5; i++) {
  console.log("Número: " + i)
}
```

### ✅ Laço `while`

O laço `while` é utilizado quando queremos repetir uma ação enquanto uma condição específica for verdadeira.

```javascript
let contador = 0

while (contador < 5) {
  console.log("Contador: " + contador)
  contador++
}
```

### ✅ Laço `do...while`

O laço `do...while` é semelhante ao `while`, mas garante que o bloco de código seja executado pelo menos uma vez, mesmo se a condição for falsa desde o início.

```javascript
let x = 0

do {
  console.log("Número: " + x)
  x++
} while (x < 3)
```

### ✅ Exemplos de Uso de Laços

#### Iterando sobre um Array com `for`

```javascript
let frutas = ["maçã", "banana", "laranja"]

for (let i = 0; i < frutas.length; i++) {
  console.log("Fruta: " + frutas[i])
}
```

#### Encontrando a Soma dos Números de 1 a 10 com `while`

```javascript
let soma = 0
let numero = 1

while (numero <= 10) {
  soma += numero
  numero++
}

console.log("A soma é: " + soma) // Saída: A soma é: 55
```

### ✅ Por que Criar Repetições (Laços)?

- **Automatização**: Permitem automatizar tarefas repetitivas, evitando a repetição de código.
- **Eficiência**: Tornam o código mais eficiente e legível, especialmente ao lidar com conjuntos de dados.
- **Flexibilidade**: Oferecem flexibilidade para lidar com diferentes cenários de repetição de forma controlada e previsível.

Dominar o uso de laços em JavaScript é fundamental para desenvolver código mais conciso, eficiente e robusto.

[Material](<./Crie repetições (Laços).pdf>)
