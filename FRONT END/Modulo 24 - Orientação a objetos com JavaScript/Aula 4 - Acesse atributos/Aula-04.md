## 📝 Aula 04: Acesse Atributos

### ✅ Introdução ao Acesso de Atributos em Objetos JavaScript

Nesta aula, você aprenderá diferentes técnicas para acessar e manipular atributos em objetos JavaScript. Além disso, exploraremos a mutabilidade dos atributos e como tornar um objeto verdadeiramente imutável.

### ✅ Objetivos

-   Compreender as técnicas de acesso a atributos em objetos JavaScript.
-   Explorar a mutabilidade de atributos em objetos.
-   Utilizar métodos para acessar e manipular atributos em objetos.

### ✅ Acesso a Atributos

Existem duas maneiras principais de acessar os atributos de um objeto em JavaScript: a **notação de ponto** e a **notação de colchetes**.

#### Exemplo de Acesso com Notação de Ponto

```javascript
console.log(pessoa.nome)
```

#### Exemplo de Acesso com Notação de Colchetes

```javascript
console.log(pessoa["nome"])
```

A notação de colchetes é especialmente útil quando o nome do atributo é dinâmico ou contém caracteres especiais.

### ✅ Manipulação de Atributos

Mesmo que um objeto seja declarado como `const`, seus atributos ainda podem ser alterados. Veja o exemplo abaixo:

```javascript
pessoa.sobrenome = undefined
pessoa.nome = "Lucas"
```

#### Tornando um Objeto Imutável

Para garantir que os atributos de um objeto não possam ser alterados, podemos usar o método `Object.freeze`.

```javascript
Object.freeze(pessoa)
```

Após aplicar `Object.freeze`, qualquer tentativa de modificar o objeto será ignorada (sem erros), e os atributos permanecerão inalterados.

### ✅ Utilizando Métodos para Acessar Atributos

O JavaScript oferece vários métodos úteis para acessar e manipular os atributos de um objeto:

-   **`Object.keys(pessoa)`**: Retorna um array com todas as chaves (nomes dos atributos) do objeto.
-   **`Object.values(pessoa)`**: Retorna um array com todos os valores dos atributos do objeto.
-   **`Object.entries(pessoa)`**: Retorna um array de arrays, onde cada sub-array contém um par chave-valor do objeto.

#### Exemplos de Uso

```javascript
console.log(Object.keys(pessoa)) // ['nome', 'sobrenome', ...]
console.log(Object.values(pessoa)) // ['Lucas', undefined, ...]
console.log(Object.entries(pessoa)) // [['nome', 'Lucas'], ['sobrenome', undefined], ...]

console.log(Object.keys(pessoa).length) // Retorna a quantidade de atributos no objeto
```

### ✅ Verificação de Atributos

Podemos verificar a existência de um atributo em um objeto utilizando o operador `in` ou verificando se o valor é `undefined`.

#### Exemplo de Verificação

```javascript
if ("sobrenome" in pessoa) {
    console.log("A pessoa tem um sobrenome")
}

if (pessoa.sobrenome) {
    console.log("A pessoa tem um sobrenome")
}
```
