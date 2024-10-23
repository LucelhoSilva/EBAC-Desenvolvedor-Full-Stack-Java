## 📝 Aula 08: Aprenda Escopo e Closures

### ✅ O que é Escopo em JavaScript?

Escopo em JavaScript refere-se à acessibilidade e visibilidade de variáveis e funções em diferentes partes do código. Em JavaScript, existem dois tipos principais de escopo: escopo global e escopo local.

- **Escopo Global**: Variáveis declaradas fora de qualquer função têm escopo global e podem ser acessadas de qualquer lugar do código.
- **Escopo Local**: Variáveis declaradas dentro de uma função têm escopo local e só podem ser acessadas dentro dessa função.

```javascript
// Exemplo de escopo global
let nome = "João"

function saudacao() {
  console.log("Olá, " + nome)
}

saudacao() // Saída: Olá, João
```

### ✅ O que são Closures?

Closures em JavaScript referem-se à capacidade de uma função acessar seu próprio escopo, bem como o escopo onde ela foi definida. Isso permite que a função "lembre" do ambiente em que foi criada, mesmo após ter sido retornada e executada em um contexto diferente.

```javascript
function criarContador() {
  let contador = 0

  return function () {
    contador++
    console.log(contador)
  }
}

let incrementar = criarContador()
incrementar() // Saída: 1
incrementar() // Saída: 2
incrementar() // Saída: 3
```

### ✅ Benefícios de Usar Closures

- **Encapsulamento**: Permitem encapsular variáveis e funções, evitando poluição do escopo global.
- **Preservação de Estado**: Permitem que uma função "lembre" do estado em que foi criada, mesmo após ser retornada e executada em outro contexto.
- **Padrão de Módulo**: São frequentemente usados para criar módulos e APIs em JavaScript, garantindo o encapsulamento e reusabilidade do código.

### ✅ Quando Usar Closures?

- **Armazenamento de Estado**: Para armazenar e preservar o estado de uma variável ou função, mesmo após a execução ter saído do escopo onde foram criadas.
- **Callbacks**: São comuns em callbacks e funções de retorno de chamada assíncronas, onde é necessário manter o contexto da função original.

### ✅ Exemplos de Closures

#### Função que Retorna Outra Função

```javascript
function saudacao(nome) {
  return function () {
    console.log("Olá, " + nome)
  }
}

let cumprimentar = saudacao("Maria")
cumprimentar() // Saída: Olá, Maria
```

#### Função de Contador com Closure

```javascript
function criarContador() {
  let contador = 0

  return function () {
    contador++
    console.log(contador)
  }
}

let incrementar = criarContador()
incrementar() // Saída: 1
incrementar() // Saída: 2
incrementar() // Saída: 3
```

### ✅ Por que Aprender Escopo e Closures?

- **Entendimento Profundo**: A compreensão de escopo e closures é essencial para escrever código JavaScript mais robusto e eficiente.
- **Melhor Organização**: Ajuda na organização e estruturação do código, evitando conflitos de variáveis e garantindo o encapsulamento.
- **Utilização Avançada**: Closures são frequentemente usados em programação assíncrona e no desenvolvimento de APIs e módulos.

Dominar o escopo e closures em JavaScript é fundamental para se tornar um desenvolvedor mais proficientes e escrever código de alta qualidade.

[Material](./Aprenda_escopo_e_closures.pdf)
