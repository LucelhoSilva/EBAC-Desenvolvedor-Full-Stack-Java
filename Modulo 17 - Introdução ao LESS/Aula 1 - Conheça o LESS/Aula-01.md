## 📝 Aula 01: Conheça o LESS

### Compreender o Papel do LESS no Desenvolvimento Front-End

LESS (Leaner Style Sheets) é um pré-processador CSS que permite escrever estilos de forma mais eficiente e organizada. Ele adiciona funcionalidades como variáveis, aninhamento de seletores, mixins, funções e operações matemáticas ao CSS padrão, facilitando a manutenção e reutilização de código.

### Configurar o LESS em um Projeto

#### Passos para Configuração

1. **Criar a Estrutura de Pastas**
   source/
   ├── styles/
   │ ├── main.less
   │

2. **Instalar Dependências**

   - Primeiro, instale o Node.js se ainda não o tiver. Em seguida, instale o LESS e o `less-watch-compiler` globalmente usando o npm:
     ```bash
     npm install -g less less-watch-compiler
     ```

3. **Configurar o `package.json`**
   - Crie ou edite o arquivo `package.json` na raiz do seu projeto para incluir um script que compile os arquivos LESS:
     ```json
     {
       "name": "meu-projeto-less",
       "version": "1.0.0",
       "scripts": {
         "less": "less-watch-compiler ./src/styles ./build/styles main.less"
       },
       "devDependencies": {
         "less": "^4.1.1",
         "less-watch-compiler": "^1.16.2"
       }
     }
     ```
   - Certifique-se de instalar as dependências listadas:
     ```bash
     npm install
     ```

### Explorar a Sintaxe do LESS

#### Criar Arquivo `main.less`

Dentro do arquivo `main.less`, podemos começar com um exemplo básico:

```less
@primary-color: yellow;

body {
  background-color: @primary-color;
}
```

#### Sintaxe do LESS

1. **Seletores**:

   - Funciona de maneira semelhante ao CSS, permitindo o aninhamento de seletores para um estilo mais limpo e organizado.

   ```less
   .container {
     .header {
       background: @primary-color;
     }
     .footer {
       background: darken(@primary-color, 10%);
     }
   }
   ```

2. **Variáveis**:

   - Usadas para armazenar valores que podem ser reutilizados em todo o arquivo.

   ```less
   @primary-color: yellow;
   @secondary-color: green;
   ```

3. **Comentários**:

   - Comentários de uma linha e de múltiplas linhas são suportados.

   ```less
   // Comentário de uma linha
   /* Comentário de múltiplas linhas */
   ```

4. **Mixins**:

   - Blocos de código que podem ser reutilizados em vários lugares.

   ```less
   .box-shadow(@x: 0, @y: 0, @blur: 10px, @color: rgba(0, 0, 0, 0.5)) {
     box-shadow: @x @y @blur @color;
   }

   .element {
     .box-shadow(2px, 2px, 5px, rgba(0, 0, 0, 0.7));
   }
   ```

### Compilar o LESS para CSS

Para compilar o LESS para CSS automaticamente, use o comando:

```bash
npm run less
```

Isso monitorará as alterações no arquivo `main.less` dentro da pasta `src/styles` e gerará um arquivo CSS compilado na pasta `build/styles`.

### Resumo

Nesta aula, compreendemos o papel do LESS como uma ferramenta importante para o desenvolvimento Front-End, configuramos um projeto LESS e exploramos a sintaxe básica do LESS, incluindo seletores, variáveis e comentários. Com essa base, você pode começar a escrever estilos mais eficientes e organizados para seus projetos.

#### Passos Finais

1. **Criar a Estrutura de Pastas**:

   ```plaintext
   build/
   src/
     styles/
       main.less
   ```

2. **Configurar o `package.json`**:

   ```json
   {
     "name": "meu-projeto-less",
     "version": "1.0.0",
     "scripts": {
       "less": "less-watch-compiler ./src/styles ./build/styles main.less"
     },
     "devDependencies": {
       "less": "^4.1.1",
       "less-watch-compiler": "^1.16.2"
     }
   }
   ```

3. **Criar Arquivo `main.less`**:

   ```less
   @primary-color: yellow;

   body {
     background-color: @primary-color;
   }
   ```

4. **Compilar LESS para CSS**:
   ```bash
   npm run less
   ```

Com essas etapas, você estará pronto para começar a usar o LESS em seus projetos de desenvolvimento Front-End.
