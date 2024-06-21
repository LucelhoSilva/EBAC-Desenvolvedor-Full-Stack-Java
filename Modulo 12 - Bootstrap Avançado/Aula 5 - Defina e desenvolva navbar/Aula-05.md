## 📝 Aula 05: Defina e desenvolva navbar

Uma navbar (barra de navegação) é um componente de interface gráfica usado para criar um menu de navegação em um site. Ela geralmente contém links para outras páginas ou seções do site, facilitando a navegação do usuário.

Você pode conferir a documentação oficial do componente:
[Documentação da Navbar do Bootstrap](https://getbootstrap.com/docs/5.2/components/navbar/)

### Exemplo desenvolvido

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Bootstrap - Navbar</title>
    <link rel="stylesheet" href="./lib/bootstrap.min.css" />
    <style>
      .navbar-nav .nav-link.active {
        color: white;
      }

      .nav-link {
        text-align: center;
      }

      section {
        height: 100vh;
        display: flex;
        justify-content: center;
        background-color: #ccc;
        padding-top: 70px;
      }

      header {
        position: sticky;
        top: 0;
        left: 0;
        background-color: #fff;
      }
    </style>
  </head>

  <body>
    <header id="cabecalho">
      <div class="navbar navbar-expand-lg  bg-light">
        <div class="container">
          <h1>Título do site</h1>
          <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
            <span class="navbar-toggler-icon"></span>
          </button>
          <nav class="collapse navbar-collapse justify-content-end" id="menu">
            <ul class="navbar-nav nav-pills">
              <li class="nav-item">
                <a class="nav-link active" href="#inicio">Início</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#produtos">Produtos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#promocoes">Promoções</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contato">Contato</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
    <div data-bs-spy="scroll" data-bs-target="#cabecalho">
      <section id="inicio">
        <h2>Início</h2>
      </section>
      <section id="produtos">
        <h2>Produtos</h2>
      </section>
      <section id="promocoes">
        <h2>Promoções</h2>
      </section>
      <section id="contato">
        <h2>Contato</h2>
      </section>
    </div>
    <script src="./lib/bootstrap.bundle.min.js"></script>
  </body>
</html>
```

Neste exemplo, criamos uma navbar fixa no topo da página que contém links para diferentes seções da mesma. A navbar é responsiva e colapsa em um botão de menu quando visualizada em telas menores.

- **navbar**: Contém a estrutura da navbar.
- **navbar-expand-lg**: Expande a navbar em telas maiores.
- **bg-light**: Define a cor de fundo clara para a navbar.
- **navbar-toggler**: Botão que aparece em telas menores para expandir/colapsar o menu.
- **navbar-collapse**: Contém o menu colapsável.
- **nav-item**: Define cada item do menu.
- **nav-link**: Define cada link de navegação.

![Exemplo de Navbar](./Exemplo/navbar.html)
