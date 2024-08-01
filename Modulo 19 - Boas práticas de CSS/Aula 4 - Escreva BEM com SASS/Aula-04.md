# 📝 Aula 4: Escreva BEM com SASS

Nesta aula, vamos integrar a metodologia BEM com SASS para criar um código CSS mais eficiente e organizado. A combinação dessas duas abordagens facilita a manutenção e a escalabilidade do projeto.

## Passos Iniciais

1. **Iniciar o projeto com npm**

   ```bash
   npm init
   ```

2. **Instalar o SASS**
   ```bash
   npm install --save-dev sass
   ```

## Estrutura do Projeto

Dentro da pasta `bem`, crie o arquivo `main.scss` com o seguinte código:

### Arquivo `main.scss`

```scss
.form {
  margin: 40px;
  &__control {
    margin-bottom: 16px;
    font-family: sans-serif;
  }
  &__submit {
    cursor: pointer;
    &--sending {
      cursor: wait;
    }
  }
}
```

Este código utiliza a sintaxe aninhada do SASS para aplicar a metodologia BEM de forma mais limpa e organizada.

### Arquivo `style.css`

Dentro da pasta `bem`, crie também o arquivo `style.css` com o seguinte código:

```css
.form {
  /*block*/
  margin: 40px;
}

.form__control {
  /*element*/
  margin-bottom: 16px;
  font-family: sans-serif;
}

.form__submit {
  /*element*/
  cursor: pointer;
}

.form__submit--sending {
  /*modifier*/
  cursor: wait;
}
```

## Configuração do `package.json`

Configure o `package.json` para compilar o SASS. Adicione o seguinte script:

```json
{
  "name": "escreva-bem-com-sass",
  "version": "1.0.0",
  "description": "Aprenda a usar a metodologia BEM para escrever com SASS",
  "main": "index.js",
  "scripts": {
    "sass": "sass",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Lucelho Silva",
  "license": "ISC",
  "devDependencies": {
    "sass": "^1.77.8"
  }
}
```

## Compilação do SASS

Para compilar o arquivo `main.scss` em `main.css`, execute o seguinte comando no terminal:

```bash
npm run sass ./bem/main.scss ./bem/main.css
```

## Arquivo `main.css` Gerado

Após a compilação, o arquivo `main.css` gerado será:

```css
.form {
  margin: 40px;
}
.form__control {
  margin-bottom: 16px;
  font-family: sans-serif;
}
.form__submit {
  cursor: pointer;
}
.form__submit--sending {
  cursor: wait;
}

/*# sourceMappingURL=main.css.map */
```

### Arquivo `main.css.map` Gerado

```json
{ "version": 3, "sourceRoot": "", "sources": ["main.scss"], "names": [], "mappings": "AAAA;EACE;;AACA;EACE;EACA;;AAEF;EACE;;AACA;EACE", "file": "main.css" }
```

## Conclusão

Integrar a metodologia BEM com SASS proporciona um código CSS mais modular e fácil de manter. O uso de SASS simplifica a aplicação da metodologia BEM, evitando a repetição de código e facilitando a leitura.

### Vantagens da Integração

- **Organização**: Código mais estruturado e modular.
- **Eficiência**: Reduz a repetição de código.
- **Manutenção**: Facilita a manutenção e escalabilidade do projeto.

### Boas Práticas

- Use a nomenclatura BEM consistentemente.
- Utilize as funcionalidades do SASS para modularizar e simplificar o código CSS.
- Mantenha os arquivos bem organizados e separados conforme a metodologia SMACSS ou BEM para facilitar a manutenção.

Agora, com essas práticas em mente, você está pronto para aplicar a metodologia BEM com SASS em seus projetos!
