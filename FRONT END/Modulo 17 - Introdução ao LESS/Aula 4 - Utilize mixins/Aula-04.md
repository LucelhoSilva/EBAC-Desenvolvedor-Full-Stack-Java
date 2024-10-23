## 📝 Aula 04: Utilize Mixins

Nesta aula, você vai aprender a:

- Compreender a sintaxe dos mixins no LESS;
- Usar mixins no LESS para reutilizar estilos e evitar a repetição de código CSS;
- Praticar a organização do código.

### Código HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Página do Lucelho</title>
    <link rel="stylesheet" href="build/styles/main.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
  </head>
  <body>
    <div class="container">
      <header>
        <img class="profile-avatar" src="https://via.placeholder.com/96x96" alt="" />
        <div class="profile-bio">
          <h1 class="profile-bio-name">Página do Lucelho</h1>
          <h2 class="profile-bio-subtitle">Desenvolvedor back-end</h2>
          <p class="profile-bio-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui et esse amet iusto dolores nihil sapiente voluptate quae saepe voluptas, numquam omnis ea ratione
            accusamus, iste, sequi impedit necessitatibus. Ut!
          </p>
        </div>
      </header>
    </div>
    <nav>
      <ul>
        <li><a href="">Instagram</a></li>
        <li><a href="">Linkedin</a></li>
        <li><a href="">Github</a></li>
        <li><a href="">E-mail</a></li>
      </ul>
    </nav>
  </body>
</html>
```

### Código LESS

Crie um arquivo LESS chamado `main.less` com o seguinte conteúdo:

```less
@import "variaveis.less";
@breakpointMobile: ~"(max-width: 767px)";
@breakpointTablet: ~"(min-width: 768px) and (max-width: 1023px)";

.marginBottom8() {
  margin-bottom: 8px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}

body {
  background-color: @corDeFundo;
  color: @corDosTestos;
}

.container {
  max-width: 960px;
  width: 100%;
  margin: 0 auto;

  @media @breakpointMobile {
    max-width: 70%;
  }
  @media @breakpointTablet {
    max-width: 80%;
  }
}

header {
  padding: 24px;

  .profile-avatar {
    display: block;
    margin: 0 auto 24px;
    border-radius: 50%;
  }
}

.profile-bio {
  text-align: center;
  &-name {
    font-size: 16px;
    .marginBottom8();
  }
  &-subtitle {
    font-size: 14px;
    .marginBottom8();
  }
  &-description {
    font-size: 14px;
    opacity: 0.7;
  }
}
```

### Compilando o Código LESS para CSS

No terminal, execute o comando para compilar o arquivo `main.less` para `main.css`:

```bash
lessc source/main.less build/styles/main.css
```

### Resumo

Nesta aula, aprendemos a criar mixins personalizados no LESS, definir mixins com parâmetros e aplicar mixins em seletores específicos. Mixins são uma ferramenta poderosa para reutilizar código e manter o CSS organizado e eficiente. A estrutura modular do código facilita a manutenção e a escalabilidade do projeto.
