## 📝 Aula 05: Conheça as Estruturas Map e Set

### ✅ Introdução às Estruturas Map e Set

Nesta aula, você vai explorar duas importantes estruturas de dados do ECMAScript 6+: o **Map** e o **Set**. O **Map** é uma estrutura que permite armazenar pares de chave-valor, enquanto o **Set** é uma estrutura que permite armazenar valores únicos. Ambos são muito úteis em diversas situações do desenvolvimento em JavaScript.

### ✅ Objetivos

-   Compreender o conceito e aplicação do **Map**.
-   Dominar a iteração através de um **Map**.
-   Explorar a estrutura **Set** e seu uso para garantir a unicidade dos valores.

### ✅ Estrutura Map

A estrutura **Map** é uma coleção de pares chave-valor onde as chaves podem ser de qualquer tipo, inclusive objetos. Diferente de um objeto, um **Map** mantém a ordem de inserção dos elementos e possui métodos próprios para manipulação dos dados.

#### Exemplo de Criação e Uso de um Map

```javascript
let meuMap = new Map()
meuMap.set("nome", "Bruno")
meuMap.set("stack", "HTML, CSS, JS e React")
console.log(meuMap)
```

Nesse exemplo, criamos um **Map** chamado `meuMap` e utilizamos o método `set` para adicionar pares chave-valor.

#### Acessando Valores em um Map

```javascript
const nome = meuMap.get("nome")
console.log(nome) // Bruno
```

Aqui, utilizamos o método `get` para buscar o valor associado à chave `'nome'`.

#### Iterando sobre um Map

Você pode iterar sobre as chaves, valores ou entradas (pares chave-valor) de um **Map** usando loops `for...of`.

-   **Iterando sobre as chaves:**

```javascript
for (let chave of meuMap.keys()) {
    console.log(chave)
}
```

-   **Iterando sobre os valores:**

```javascript
for (let valor of meuMap.values()) {
    console.log(valor)
}
```

-   **Iterando sobre as entradas (chave-valor):**

```javascript
for (let entrada of meuMap.entries()) {
    console.log(entrada)
}
```

#### Removendo e Limpando um Map

Você pode remover um elemento específico usando o método `delete` e limpar o **Map** completamente usando `clear`.

```javascript
meuMap.delete("stack")
console.log(meuMap) // Map(1) { 'nome' => 'Bruno' }

// meuMap.clear();
// console.log(meuMap.size); // 0
```

### ✅ Estrutura Set

A estrutura **Set** é utilizada para armazenar valores únicos, ou seja, ela não permite elementos duplicados. Assim como no **Map**, a ordem de inserção dos elementos é mantida.

#### Exemplo de Criação e Uso de um Set

```javascript
const cpfs = new Set()
cpfs.add("50718120027")
cpfs.add("77840567029")
cpfs.add("40058126007")

console.log(cpfs) // Set(3) { '50718120027', '77840567029', '40058126007' }
```

Nesse exemplo, criamos um **Set** chamado `cpfs` e utilizamos o método `add` para adicionar valores únicos.

#### Iterando sobre um Set

Você pode iterar sobre os valores de um **Set** utilizando um loop `forEach` ou os métodos `keys` e `values`.

```javascript
cpfs.forEach((valor) => {
    console.log(valor)
})

console.log(cpfs.keys()) // SetIterator { '50718120027', '77840567029', '40058126007' }
console.log(cpfs.values()) // SetIterator { '50718120027', '77840567029', '40058126007' }
```

#### Removendo Duplicados de um Array Usando Set

Um dos usos mais comuns do **Set** é a remoção de valores duplicados em arrays.

```javascript
const array = ["Bruno Oliveira", "Bianca Cristine", "Bernardo Oliveira", "Bruno Oliveira", "Bernardo Oliveira"]
const arrayComoSet = new Set([...array])
const arraySemDuplicados = [...arrayComoSet]

console.log(arrayComoSet) // Set(3) { 'Bruno Oliveira', 'Bianca Cristine', 'Bernardo Oliveira' }
console.log(arraySemDuplicados) // [ 'Bruno Oliveira', 'Bianca Cristine', 'Bernardo Oliveira' ]
```
