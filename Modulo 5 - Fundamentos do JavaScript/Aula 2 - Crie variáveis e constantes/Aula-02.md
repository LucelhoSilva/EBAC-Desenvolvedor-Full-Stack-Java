## 📝 Aula 02: Crie Variáveis e Constantes

### ✅ O que são Variáveis e Constantes?

Variáveis e constantes são elementos fundamentais na programação que permitem armazenar e manipular dados.

- **Variáveis**: São espaços na memória que podem armazenar valores e cujo conteúdo pode variar ao longo da execução do programa.

- **Constantes**: São semelhantes às variáveis, porém, uma vez atribuído um valor, este não pode ser alterado durante a execução do programa.

### ✅ Como Criar Variáveis e Constantes em JavaScript

Em JavaScript, podemos criar variáveis usando as palavras-chave `var`, `let` ou `const`.

- `var`: Era a forma mais antiga de declarar variáveis em JavaScript, porém, com a introdução do `let` e `const`, seu uso é menos recomendado devido a escopo de variável mais amplo.
- `let`: Permite declarar variáveis que podem ser reatribuídas.
- `const`: Permite declarar constantes cujo valor não pode ser alterado após a atribuição inicial.

```javascript
// Variáveis
let idade = 25
var nome = "João"

// Constantes
const PI = 3.1415
const URL_API = "https://api.example.com"
```

### ✅ Exemplos de Uso de Variáveis e Constantes

Vamos considerar alguns exemplos práticos de uso de variáveis e constantes em JavaScript.

#### Utilizando Variáveis

```javascript
let preco = 50
let quantidade = 3
let total = preco * quantidade

console.log("O total é: " + total) // Saída: O total é: 150
```

#### Utilizando Constantes

```javascript
const TAXA_DE_DESCONTO = 0.1 // 10%

let preco = 100
let desconto = preco * TAXA_DE_DESCONTO
let precoFinal = preco - desconto

console.log("Preço final com desconto: " + precoFinal) // Saída: Preço final com desconto: 90
```

### ✅ Por que Utilizar Variáveis e Constantes?

- **Organização**: Permitem organizar e gerenciar os dados de forma mais eficiente.
- **Flexibilidade**: Variáveis permitem armazenar valores que podem ser modificados ao longo do tempo, enquanto constantes garantem que certos valores permaneçam fixos.
- **Legibilidade**: Tornam o código mais legível e compreensível, pois atribuem nomes significativos aos dados.

Ao dominar o uso de variáveis e constantes, você estará apto a criar programas mais estruturados e eficientes em JavaScript.

[Material](./Crie%20variáveis%20e%20constantes.pdf)
