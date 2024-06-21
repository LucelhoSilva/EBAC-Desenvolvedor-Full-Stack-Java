## 📝 Aula 07: Defina e desenvolva toasts

Toasts são componentes de interface que fornecem feedback rápido e breve sobre o estado de uma operação em segundo plano. Eles geralmente aparecem de forma transitória e não interrompem a experiência do usuário.

### Exemplo desenvolvido

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Bootstrap - Toasts</title>
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

      .toast-container {
        z-index: 1055;
      }
    </style>
  </head>
  <body>
    <!-- Cabeçalho -->
    <header id="cabecalho">
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container">
          <h1>Título do site</h1>
          <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end m-2" id="menu">
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
          </div>
          <button id="btn-checar-emails" type="button" class="btn btn-warning">Checar caixa de mensagens</button>
        </div>
      </nav>
    </header>

    <!-- Conteúdo Principal -->
    <main data-bs-spy="scroll" data-bs-target="#cabecalho">
      <section id="inicio">
        <h2>Início</h2>
      </section>
      <section id="produtos">
        <h2>Produtos</h2>
        <div class="container">
          <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
              <button data-bs-toggle="tab" data-bs-target="#abaeletronico" class="nav-link active" id="nav-eletronico-tab" type="button" role="tab">Eletrônicos</button>
              <button data-bs-toggle="tab" data-bs-target="#abamodamasculina" class="nav-link" id="nav-masculina-tab" type="button" role="tab">Moda Masculina</button>
              <button data-bs-toggle="tab" data-bs-target="#abamodafeminina" class="nav-link" id="nav-feminina-tab" type="button" role="tab">Moda Feminina</button>
            </div>
          </nav>
          <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active" id="abaeletronico" role="tabpanel" aria-labelledby="nav-eletronico-tab">
              <h3>Eletrônicos</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe quis deserunt at ipsum fuga? Minus reiciendis, in consequuntur natus dolorum nobis delectus deserunt
                pariatur eos nihil dignissimos beatae. Consequatur, modi!
              </p>
            </div>
            <div class="tab-pane fade" id="abamodamasculina" role="tabpanel" aria-labelledby="nav-masculina-tab">
              <h3>Moda Masculina</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi vel nobis deserunt repellat! Rem dolorem aliquid esse dolorum omnis iste non alias doloribus, est vero
                ad repudiandae aliquam ducimus possimus.
              </p>
            </div>
            <div class="tab-pane fade" id="abamodafeminina" role="tabpanel" aria-labelledby="nav-feminina-tab">
              <h3>Moda Feminina</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta maiores architecto, quae sunt vel cum distinctio nobis corporis ea ullam provident. Dignissimos nemo
                vero tenetur labore, harum possimus fugit praesentium.
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
    </main>

    <!-- Toast -->
    <div class="toast-container position-fixed bottom-0 end-0 p-3">
      <div data-bs-autohide="false" class="toast" id="mensagens-alerta">
        <div class="toast-header">
          <strong class="me-auto">Importante</strong>
        </div>
        <div class="toast-body">
          Você possui 10 mensagens não lidas.
          <div class="mt-2 pt-2 border-top">
            <button data-bs-dismiss="toast" class="btn btn-danger">Descartar</button>
          </div>
        </div>
      </div>
    </div>

    <script src="./lib/bootstrap.bundle.min.js"></script>
    <script>
      const ativadorToast = document.getElementById("btn-checar-emails")
      const mensagem = document.getElementById("mensagens-alerta")

      if (ativadorToast) {
        ativadorToast.addEventListener("click", function () {
          const toast = new bootstrap.Toast(mensagem)
          toast.show()
        })
      }
    </script>
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
- **toast-container**: Define o container das toasts, posicionado no canto inferior direito da tela.
- **toast**: Define uma toast.
- **toast-header**: Cabeçalho da toast, contendo o título.
- **toast-body**: Corpo da toast, contendo a mensagem e o botão para descartar.

Neste exemplo, a toast aparece quando o usuário clica no botão "Checar caixa de mensagens". A toast fornece um feedback informando que há 10 mensagens não lidas, com a opção de descartar a mensagem.

![Exemplo de Toasts](./Exemplo/toasts.html)
