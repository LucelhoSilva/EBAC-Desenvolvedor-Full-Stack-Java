# 📝 Aula 1: Inicie o Desenvolvimento da Landing Page

## Objetivos

-   Conhecer os elementos e as funcionalidades que serão desenvolvidos ao longo do módulo;
-   Familiarizar-se com ferramentas e configurações para a criação da landing page;
-   Estruturar o projeto da landing page, incluindo a criação de pastas e arquivos necessários, configuração do ambiente de desenvolvimento e importação de recursos essenciais;
-   Instalar e usar a ferramenta Parcel.

## Estrutura do Projeto

Nesta primeira aula, vamos configurar a estrutura inicial do projeto e o ambiente de desenvolvimento. Usaremos o Parcel como bundler para facilitar o desenvolvimento e dispensar o uso de servidores como o Live Server, pois o Parcel já fornece um ambiente de desenvolvimento próprio.

## Passo 1: Criando a Estrutura de Pastas

A estrutura de pastas do projeto é a seguinte:

```
projeto/
│
├── index.html
├── package.json
├── sharp.config.json
└── src/
    ├── images/
    ├── scripts/
    │   └── main.js
    └── styles/
        └── main.scss
```

### Passo 2: Configurando o HTML

No arquivo `index.html`, criamos a estrutura básica:

```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>EBAC Talks</title>
        <link rel="stylesheet" href="./src/styles/main.scss" />
    </head>

    <body>
        <h1>Olá</h1>
        <img src="./src/images/backend.png" alt="Imagem de exemplo" />
        <script src="./src/scripts/main.js"></script>
    </body>
</html>
```

### Passo 3: Criando o Arquivo de Estilos

No arquivo `src/styles/main.scss`, iniciamos com um estilo simples para o corpo da página:

```scss
body {
    background-color: green;
}
```

### Passo 4: Criando o Arquivo JavaScript

No arquivo `src/scripts/main.js`, adicionamos um simples `console.log` para testar o ambiente de desenvolvimento:

```js
console.log("Hello World!")
```

### Passo 5: Configurando o `package.json`

Criamos um arquivo `package.json` para gerenciar as dependências e scripts do projeto:

```json
{
    "name": "ebac-talks",
    "version": "1.0.0",
    "description": "Landing page de um evento fictício",
    "scripts": {
        "dev": "parcel index.html src/scripts/main.js src/styles/main.scss",
        "build": "parcel build index.html",
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "Lucelho Silva",
    "license": "ISC",
    "devDependencies": {
        "@parcel/transformer-sass": "^2.9.3",
        "parcel": "^2.9.3",
        "sass": "^1.77.8",
        "sharp": "^0.31.3"
    }
}
```

### Passo 6: Configurando o `sharp.config.json`

Para otimização de imagens, configuramos o arquivo `sharp.config.json`:

```json
{
    "png": {
        "quality": 75
    }
}
```

### Passo 7: Instalando Dependências e Rodando o Projeto

Com a estrutura pronta, instalamos as dependências necessárias:

```bash
npm install
```

E iniciamos o ambiente de desenvolvimento:

```bash
npm run dev
```

O Parcel cuidará de compilar o SCSS e o JavaScript, além de servir o projeto com hot-reload.

### Conclusão

Nesta aula, configuramos a estrutura básica do projeto, incluindo a instalação do Parcel e outras dependências. Isso nos proporciona um ambiente de desenvolvimento eficiente e fácil de usar, permitindo que nos concentremos na criação da landing page e nos próximos passos do desenvolvimento.
