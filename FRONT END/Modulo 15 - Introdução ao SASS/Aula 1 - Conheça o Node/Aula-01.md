## 📝 Aula 01: Conheça o Node

### Conceituar e Instalar o Node.js

Node.js é um runtime JavaScript assíncrono e orientado a eventos, projetado para construir aplicações escaláveis de rede. Ele é baseado no motor JavaScript V8 do Google Chrome, permitindo que você execute código JavaScript fora do navegador.

### Passos para Instalar o Node.js

1. **Acesse o Site Oficial do Node.js**: Vá para [nodejs.org](https://nodejs.org).
2. **Baixe a Versão Recomendada**: Escolha a versão recomendada para a maioria dos usuários.
3. **Instale o Node.js**: Siga as instruções do instalador para completar a instalação.

### Verificar a Instalação

Após a instalação, você pode verificar se o Node.js foi instalado corretamente abrindo um terminal e digitando:

```bash
node -v
```

Isso exibirá a versão do Node.js instalada. Da mesma forma, para verificar a versão do npm (Node Package Manager), você pode digitar:

```bash
npm -v
```

### Definir e Instalar o Pacote SASS

SASS (Syntactically Awesome Stylesheets) é um pré-processador CSS que adiciona funcionalidades poderosas e elegantes ao CSS. Ele permite o uso de variáveis, aninhamento, mixins, herança e outras características, tornando o CSS mais mantenível e eficiente.

### Passos para Instalar o SASS

1. **Instalar o SASS Globalmente com npm**: No terminal, execute o comando:

   ```bash
   npm install -g sass
   ```

2. **Verificar a Instalação do SASS**: Após a instalação, você pode verificar se o SASS foi instalado corretamente digitando:

   ```bash
   sass --version
   ```

### Exemplo de Uso do SASS

Depois de instalar o SASS, você pode criar um arquivo `.scss` e compilá-lo para CSS.

1. **Criar um Arquivo SASS**: Crie um arquivo chamado `style.scss` com o seguinte conteúdo:

   ```scss
   $primary-color: #3498db;

   body {
     font-family: Arial, sans-serif;
     background-color: $primary-color;
     color: #fff;
   }

   .container {
     margin: 0 auto;
     padding: 20px;
   }
   ```

2. **Compilar o Arquivo SASS para CSS**: No terminal, execute o comando:

   ```bash
   sass style.scss style.css
   ```

Isso gerará um arquivo `style.css` com o CSS compilado do seu arquivo SASS.

### Exemplo de Código HTML Utilizando o CSS Compilado

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Exemplo SASS</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="container">
      <h1>Bem-vindo ao SASS!</h1>
      <p>Este é um exemplo de como usar SASS em seu projeto.</p>
    </div>
  </body>
</html>
```

### Resumo

Nesta aula, aprendemos sobre o Node.js e como instalá-lo. Também definimos e instalamos o SASS, criando um exemplo prático de uso. Com essas ferramentas, você pode melhorar significativamente seu fluxo de trabalho de desenvolvimento web.
