## 📝 Quiz

1. Qual o papel do JavaScript no desenvolvimento Front-End?

   - [x] `Adicionar comportamentos e ações aos elementos de uma página`
   - [ ] `Estilizar os elementos de uma página`
   - [ ] `Tornar o site mais fácil de ser encontrado por motores de busca, como o Google`
   - [ ] `Acessar banco de dados e processar informações no servidor`

   - Essa é a principal função do JavaScript no desenvolvimento front-end. Ele permite adicionar interatividade, responder a eventos, manipular o conteúdo da página e realizar ações dinâmicas, como animações e validações de formulários. O JavaScript é responsável por tornar os elementos de uma página mais dinâmicos e responsivos às interações do usuário.

2. Qual das informações a seguir é INCORRETA?

   - [x] `Uma variável não poderá ter seu valor alterado para o valor de um tipo diferente`
   - [ ] `Uma constante deve ter seu valor atribuído no momento da criação e não poderá ter o valor alterado`
   - [ ] `Podemos usar as palavras reservadas var e let para declarar variáveis`
   - [ ] `Variáveis podem ser declaradas e ter seu valor atribuído posteriormente`

   - A informação incorreta é alternativa "Uma variável não poderá ter seu valor alterado para o valor de um tipo diferente". Pois, em linguagens de programação com tipagem dinâmica, como JavaScript e Python, é possível alterar o valor de uma variável para um valor de um tipo diferente. A tipagem dinâmica permite que uma variável seja reatribuída com um valor de qualquer tipo em qualquer momento.

3. Qual dos tipos a seguir não existem no JavaScript

   - [x] `Decimal`
   - [ ] `Number`
   - [ ] `String`
   - [ ] `Object`

   - A resposta correta é "Decimal". Pois este tipo não existe no JavaScript. Em vez disso, o JavaScript usa o tipo "Number" para representar números de ponto flutuante, incluindo números decimais.

4. Qual problema temos neste código?

   ```javascript
   let counter = 0 while (counter < 10) {  console.log(counter * 10) }
   ```

   - [x] `O código dentro do while será executado eternamente, pois o valor de counter sempre será menor que 10`

   - A resposta correta para é "O código dentro do while será executado eternamente, pois o valor de counter sempre será menor que 10". Pois o valor de "counter" é inicializado como 0, e o bloco de código dentro do while é repetido enquanto a condição "counter < 10" for verdadeira. No entanto, o valor de "counter" nunca é incrementado dentro do loop, o que resultará em um loop infinito, imprimindo 0 repetidamente.

   - Para corrigir o problema e evitar o loop infinito, é necessário incrementar o valor de "counter" dentro do loop usando o operador de incremento (++), como mostrado abaixo:

   ```javascript
   let counter = 0
   while (counter < 10) {
     console.log(counter * 10)
     counter++ // Incremento do valor de counter
   }
   ```

5. Qual dos operadores lógicos a seguir NÃO é válido?

   - [x] `>!`
   - [ ] `>=`
   - [ ] `<=`
   - [ ] `==`

   - A resposta correta é ">!". Pois não existe um operador lógico que combine o símbolo ">" (maior que) com o símbolo "!" (negação).

6. Qual dos exemplos a seguir NÃO representa o uso de uma função?

   - [x] `nomes.length`
   - [ ] `console.log("Olá mundo")`
   - [ ] `parseInt("Dez")`
   - [ ] `dizOi("José")`

   - O exemplo que NÃO representa o uso de uma função é a opção "nomes.length". Isso ocorre porque "nomes.length" é uma propriedade de um objeto/array (no caso, "length" é uma propriedade de um array chamado "nomes"), e não uma função.
