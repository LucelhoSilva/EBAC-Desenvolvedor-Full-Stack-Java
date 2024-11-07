## 📝 Aula 02: Produza com React

### ✅ Introdução

Nesta aula, aprendemos a configurar um ambiente de desenvolvimento em React que inclua ferramentas para garantir a qualidade e a padronização do código. Exploramos como usar o **Create React App** para criar uma aplicação base, configurar o **ESLint** e o **Prettier** para padronização de código, e como o arquivo **.editorconfig** pode ajudar a manter a consistência de estilo entre diferentes editores. Também configuramos o **Inspetor de Elementos** para facilitar a inspeção e depuração da estrutura de componentes.

### ✅ Objetivos

- Conhecer o **Create React App** para iniciar projetos React.
- Configurar o **ESLint** e o **Prettier** para manter a padronização e qualidade do código.
- Personalizar regras de formatação e automatizar tarefas com **settings** do VSCode.
- Usar o **Inspetor de Elementos** do navegador para visualizar a estrutura dos componentes.

### ✅ Criando o Projeto com Create React App

Para iniciar um novo projeto em React, podemos usar o **Create React App**, que configura automaticamente a estrutura básica da aplicação e as dependências necessárias.

```bash
npx create-react-app nome-do-projeto
```

Esse comando cria uma pasta com o nome do projeto, contendo todos os arquivos e pastas iniciais.

### ✅ Configuração do ESLint

O **ESLint** é uma ferramenta de análise de código que ajuda a detectar problemas de sintaxe e estilo, além de aplicar boas práticas de desenvolvimento.

#### Instalando ESLint e Plugins

Primeiro, precisamos instalar o **ESLint** e os plugins recomendados:

```bash
npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-prettier --save-dev
```

#### Arquivo de Configuração `.eslintrc.json`

O arquivo `.eslintrc.json` configura as regras e os plugins para análise do código. Aqui está um exemplo de configuração básica:

```json
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "prettier"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["@typescript-eslint", "react", "react-hooks"],
  "rules": {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off"
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
```

- **`rules`**: Especifica regras adicionais para ESLint. Por exemplo, `react-hooks/rules-of-hooks` está definido como `error` para garantir o uso correto de hooks.
- **`settings`**: Define a versão do React automaticamente para evitar conflitos.

### ✅ Configuração do Prettier

O **Prettier** é uma ferramenta de formatação automática de código que ajuda a manter a consistência visual.

#### Instalando o Prettier

Para instalar o **Prettier**, execute:

```bash
npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier
```

#### Arquivo de Configuração `.prettierrc`

Crie um arquivo `.prettierrc` na raiz do projeto para definir as regras de formatação:

```json
{
  "trailingComma": "none",
  "semi": false,
  "singleQuote": true
}
```

- **`trailingComma`**: Remove a vírgula final em listas.
- **`semi`**: Remove o ponto e vírgula no final das linhas.
- **`singleQuote`**: Usa aspas simples ao invés de aspas duplas.

### ✅ Configuração do Editor com `.editorconfig`

O arquivo `.editorconfig` padroniza estilos básicos de formatação, como indentação e final de linha, entre diferentes editores e colaboradores.

#### Exemplo de Configuração `.editorconfig`

```ini
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
```

- **`indent_style`**: Define o uso de espaços para indentação.
- **`indent_size`**: Define o tamanho da indentação em 2 espaços.
- **`end_of_line`**: Define o tipo de quebra de linha (`lf` para Linux e macOS).
- **`charset`**: Define o conjunto de caracteres (`utf-8`).
- **`trim_trailing_whitespace`**: Remove espaços desnecessários no final das linhas.
- **`insert_final_newline`**: Adiciona uma nova linha ao final do arquivo.

### ✅ Configuração do VSCode com `.vscode/settings.json`

Para automatizar a formatação e garantir que o ESLint corrija os erros ao salvar, configuramos o arquivo `settings.json` dentro da pasta `.vscode`:

```json
{
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

- **`editor.formatOnSave`**: Desativa a formatação automática ao salvar, pois o ESLint cuidará disso.
- **`editor.codeActionsOnSave`**: Configura o ESLint para corrigir problemas automaticamente ao salvar o arquivo.

### ✅ Usando o Inspetor de Elementos

O **Inspetor de Elementos** dos navegadores é uma ferramenta essencial para desenvolver e depurar aplicações em React. Ele permite visualizar a estrutura HTML dos componentes, identificar classes, estilos aplicados e examinar o estado e as props dos componentes em tempo de execução. 

- **Componentes**: No Chrome DevTools, existe a aba **React Developer Tools**, que permite inspecionar os componentes React, verificar estados e props, e entender a hierarquia de componentes.
- **Elementos**: Na aba **Elements**, é possível ver o HTML gerado pelos componentes React e os estilos aplicados. Isso ajuda a depurar problemas visuais e de layout.

### ✅ Conclusão

Nesta aula, configuramos um ambiente de desenvolvimento em React eficiente e padronizado, usando ferramentas como **ESLint** e **Prettier** para análise e formatação de código, além de **.editorconfig** e configurações de **settings** no VSCode. Isso garante que o código seja mantido com alta qualidade e consistência. Além disso, aprendemos a utilizar o **Inspetor de Elementos** e o **React Developer Tools** para inspecionar e depurar os componentes durante o desenvolvimento.