## 📝 Aula 02: Aplique Variáveis no LESS

### Declarar e Utilizar Variáveis no LESS para Armazenar Valores

Variáveis no LESS permitem armazenar valores reutilizáveis em todo o código CSS, facilitando a manutenção e a consistência do design. Ao utilizar variáveis, você pode alterar um valor em um único lugar e atualizar todo o seu projeto automaticamente.

### Exemplo de Declaração e Uso de Variáveis no LESS

#### Arquivo LESS: `variaveis.less`

```less
@corDeFundo: #192a56;
@corDosBotoes: #0097e6;
@corDosTextos: #f5f6fa;
```

### Utilizar Variáveis em Outro Arquivo LESS

Você pode importar variáveis de um arquivo LESS para reutilizá-las em diferentes partes do projeto. Isso é útil para manter o código organizado e evitar duplicação de código.

#### Arquivo LESS: `main.less`

```less
@import "variaveis.less";

body {
  background-color: @corDeFundo;
  color: @corDosTextos;
}

button {
  background-color: @corDosBotoes;
  color: @corDeFundo;
  padding: 10px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: lighten(@corDosBotoes, 10%);
  }

  &.sucesso {
    background-color: @corDeFundo;
    color: @corDosTextos;
  }
}
```

### Configurar a Compilação do LESS para CSS

Para facilitar o desenvolvimento, você pode configurar a compilação do código LESS para CSS, garantindo que as alterações sejam refletidas imediatamente no CSS compilado.

#### Passos para Compilar LESS para CSS

1. **Instalar o LESS globalmente com npm**: Se ainda não instalou, use o comando:

   ```bash
   npm install -g less
   ```

2. **Utilizar o Modo de Observação**: No terminal, execute o comando:

   ```bash
   less-watch-compiler src/styles build/styles main.less
   ```

Esse comando compilará automaticamente `main.less` para `main.css` sempre que o arquivo LESS for salvo.

### Exemplo Completo

Vamos criar um exemplo completo que inclui a declaração de variáveis, uso de aninhamento e configuração de compilação automática.

#### Estrutura de Pastas

```
src/
└── styles/
    ├── variaveis.less
    └── main.less
build/
└── styles/
    └── main.css
index.html
```

#### Arquivo LESS: `variaveis.less`

```less
@corDeFundo: #192a56;
@corDosBotoes: #0097e6;
@corDosTextos: #f5f6fa;
```

#### Arquivo LESS: `main.less`

```less
@import "variaveis.less";

body {
  background-color: @corDeFundo;
  color: @corDosTextos;
}

button {
  background-color: @corDosBotoes;
  color: @corDeFundo;
  padding: 10px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: lighten(@corDosBotoes, 10%);
  }

  &.sucesso {
    background-color: @corDeFundo;
    color: @corDosTextos;
  }
}
```

#### Compilar o LESS para CSS

No terminal, execute:

```bash
less-watch-compiler src/styles build/styles main.less
```

#### Código HTML Utilizando o CSS Compilado

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Página do Lucelho</title>
    <link rel="stylesheet" href="build/styles/main.css" />
  </head>
  <body>
    <header>
      <img src="https://via.placeholder.com/200x200" alt="Imagem de Placeholder" />
      <h1>Página do Lucelho</h1>
      <h2>Desenvolvedor back-end</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui et esse amet iusto dolores nihil sapiente voluptate quae saepe voluptas, numquam omnis ea ratione accusamus,
        iste, sequi impedit necessitatibus. Ut!
      </p>
      <nav>
        <ul>
          <li><a href="">Instagram</a></li>
          <li><a href="">LinkedIn</a></li>
          <li><a href="">Github</a></li>
          <li><a href="">E-mail</a></li>
        </ul>
      </nav>
    </header>
  </body>
</html>
```

### Resumo

Nesta aula, aprendemos a declarar e utilizar variáveis no LESS para armazenar valores, facilitando a manutenção e consistência do design. Também vimos como importar variáveis de um arquivo LESS para reutilizá-las em diferentes partes do projeto, mantendo o código organizado e evitando duplicação. Por fim, configuramos a compilação automática do código LESS para CSS, agilizando o processo de desenvolvimento. Com esses conhecimentos, você pode criar estilos mais eficientes e bem estruturados para seus projetos web.
