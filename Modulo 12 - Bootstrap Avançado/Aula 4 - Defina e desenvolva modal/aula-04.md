## 📝 Aula 04: Defina e desenvolva modal

Um modal é um componente de interface gráfica utilizado para criar caixas de diálogo, janelas de alerta ou outras sobreposições de conteúdo interativo na página. Modais são úteis para exibir informações adicionais, formulários, ou opções que exigem interação do usuário sem redirecioná-lo para uma nova página.

Você pode conferir a documentação oficial do componente:
[Documentação do Modal do Bootstrap](https://getbootstrap.com/docs/5.2/components/modal/)

### Exemplo desenvolvido

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=5.0" />
    <title>Bootstrap - Modal</title>
    <link rel="stylesheet" href="./lib/bootstrap.min.css" />
  </head>

  <body>
    <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exemplo-modal">Abrir modal</button>

    <div class="modal" id="exemplo-modal" data-bs-backdrop="static">
      <div class="modal-dialog">
        <div class="modal-content">
          <header class="modal-header">
            <h5>Título da modal</h5>
            <button data-bs-dismiss="modal" type="button" class="btn-close"></button>
          </header>
          <main class="modal-body">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, consectetur animi ab sit voluptas aliquam aut in mollitia, odit officia earum eaque quaerat
              dignissimos molestiae fuga cupiditate officiis! Voluptatem, est?
            </p>
          </main>
          <footer class="modal-footer">
            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
            <button type="button" class="btn btn-success" data-bs-dismiss="modal">Confirmar</button>
          </footer>
        </div>
      </div>
    </div>

    <script src="./lib/bootstrap.bundle.min.js"></script>
    <script>
      document.addEventListener("DOMContentLoaded", function () {
        const modalExemplo = new bootstrap.Modal("#exemplo-modal")
        setTimeout(function () {
          modalExemplo.show()
        }, 3000)
      })
    </script>
  </body>
</html>
```

Neste exemplo, criamos uma modal que é exibida automaticamente após 3 segundos quando a página é carregada. A modal contém um título, um corpo com texto e dois botões no rodapé:

- **modal**: Contém a estrutura da modal.
- **modal-dialog**: Define o contêiner da modal.
- **modal-content**: Contém o conteúdo da modal.
- **modal-header**: Cabeçalho da modal, contendo o título e o botão de fechamento.
- **modal-body**: Corpo da modal, onde o conteúdo principal é exibido.
- **modal-footer**: Rodapé da modal, contendo os botões de ação.

Com esse exemplo, você pode desenvolver modais estilizadas e funcionais utilizando as classes de utilitários do Bootstrap, melhorando a interação do usuário em seu projeto web.

![Exemplo de Modal](./Exemplo/modal.html)
