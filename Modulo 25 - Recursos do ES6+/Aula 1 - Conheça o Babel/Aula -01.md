# 📝 Aula 1: Conheça o Babel

## Objetivos

-   Compreender o papel do Babel na transpilação de código JavaScript para versões compatíveis com navegadores mais antigos;
-   Aprender a configurar o Babel e criar arquivos de configuração para projetos de desenvolvimento;
-   Explorar a importância de verificar a compatibilidade dos recursos do ES6+ nos navegadores e como usar o Babel para lidar com navegadores obsoletos.

## Conteúdos Abordados

### Instalação e Configuração do Babel

Nesta aula, foi realizada a instalação do Babel utilizando o npm (Node Package Manager). Os pacotes instalados foram:

```bash
npm install --save-dev @babel/preset-env
npm install --save-dev @babel/core @babel/cli
```

Além disso, foi criado um arquivo de configuração do Babel, `babel.config.json`, com o seguinte conteúdo:

```json
{
    "presets": ["@babel/preset-env"]
}
```

### Recursos do ES6+ e ECMAScript

O ECMAScript é a especificação da linguagem de script que o JavaScript implementa. A versão ES6+ (ou ECMAScript 2015) introduziu diversos novos recursos e funcionalidades ao JavaScript.

-   Exemplos de implementações do ECMAScript incluem o motor V8, usado no Google Chrome, e o ActionScript, utilizado antigamente com o Flash.
-   O Babel é uma ferramenta que permite que esses recursos mais recentes sejam compatíveis com navegadores mais antigos através de um processo chamado **transpilação**. Transpilação é a conversão de código de uma versão da linguagem para outra mais compatível com diferentes ambientes.

### Ferramentas Complementares

-   **Can I use:** Um site onde você pode verificar a compatibilidade de recursos do ES6+ com diferentes navegadores. As cores indicam a compatibilidade: verde (compatível), amarelo (parcialmente compatível) e vermelho (não compatível).
-   **Browserslist:** Permite visualizar a popularidade dos navegadores e configurar o Babel para suportar os navegadores mais utilizados.

### Configuração do `package.json`

Foi configurado o arquivo `package.json` para adicionar scripts de automação e definir a lista de navegadores suportados:

```json
{
    "scripts": {
        "build": "babel src -d dist"
    },
    "browserslist": "> 0.25%",
    "devDependencies": {
        "@babel/cli": "^7.24.8",
        "@babel/core": "^7.25.2",
        "@babel/preset-env": "^7.25.3"
    }
}
```

### Teste do Babel

Um arquivo de teste, `teste.js`, foi criado para verificar o funcionamento do Babel:

```javascript
console.log("olá Babel")
```

Esse código simples foi transpilado e gerou uma versão compatível com navegadores antigos na pasta `dist` após a execução do script `build`.
