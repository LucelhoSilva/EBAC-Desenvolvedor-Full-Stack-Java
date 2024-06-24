## 📝 Aula 06: Defina e desenvolva abas

As abas são um componente de interface gráfica usado para organizar conteúdo em diferentes seções dentro de uma mesma página. Elas permitem que o usuário alterne entre diferentes conjuntos de conteúdo, mantendo uma interface limpa e organizada.

### Exemplo desenvolvido

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Bootstrap - Abas</title>
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
        background-color: #ccc;
        padding-top: 72px;
      }

      section h2 {
        text-align: center;
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
      <div class="navbar navbar-expand-lg bg-light">
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
        <div class="container">
          <nav class="nav nav-tabs">
            <button data-bs-toggle="tab" data-bs-target="#abaeletronico" class="nav-link active" type="button">Eletrônicos</button>
            <button data-bs-toggle="tab" data-bs-target="#abamodamasculina" class="nav-link" type="button">Moda Masculina</button>
            <button data-bs-toggle="tab" data-bs-target="#abamodafeminina" class="nav-link" type="button">Moda Feminina</button>
          </nav>
          <div class="tab-content">
            <div class="tab-pane fade show active" id="abaeletronico">
              <h3>Eletrônicos</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe quis deserunt at ipsum fuga? Minus reiciendis, in consequuntur natus dolorum nobis delectus deserunt
                pariatur eos nihil dignissimos beatae. Consequatur, modi!
              </p>
            </div>
            <div class="tab-pane fade" id="abamodamasculina">
              <h3>Moda Masculina</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi vel nobis deserunt repellat! Rem dolorem aliquid esse dolorum omnis iste non alias doloribus, est
                vero ad repudiandae aliquam ducimus possimus.
              </p>
            </div>
            <div class="tab-pane fade" id="abamodafeminina">
              <h3>Moda Feminina</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta maiores architecto, quae sunt vel cum distinctio nobis corporis ea ullam provident. Dignissimos
                nemo vero tenetur labore, harum possimus fugit praesentium.
              </p>
            </div>
          </div>
        </div>
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

### Explicação do código

- **navbar**: Contém a estrutura da navbar.
- **navbar-expand-lg**: Expande a navbar em telas maiores.
- **bg-light**: Define a cor de fundo clara para a navbar.
- **navbar-toggler**: Botão que aparece em telas menores para expandir/colapsar o menu.
- **navbar-collapse**: Contém o menu colapsável.
- **nav-item**: Define cada item do menu.
- **nav-link**: Define cada link de navegação.
- **nav-tabs**: Define a estrutura das abas.
- **tab-content**: Contém o conteúdo das abas.
- **tab-pane**: Define cada painel de conteúdo correspondente a uma aba.
- **fade**: Adiciona um efeito de transição suave.
- **show active**: Mostra a aba ativa.

Neste exemplo, as abas são usadas para organizar o conteúdo da seção "Produtos" em três categorias: "Eletrônicos", "Moda Masculina" e "Moda Feminina". Cada aba possui seu próprio conteúdo que é exibido quando a aba correspondente é clicada.

![Exemplo de Abas](./Exemplo/abas.html)
