## 📝 Aula 03: Defina e desenvolva dropdown

Um dropdown é um componente interativo utilizado para criar menus suspensos que exibem uma lista de opções ao serem clicados. Esses componentes são frequentemente utilizados em interfaces de usuário para agrupar opções de navegação, formulários ou ações específicas.

Por exemplo, em um formulário de cadastro ou menu de navegação, podemos utilizar um dropdown para exibir várias opções de forma organizada e acessível.

Você pode conferir a documentação oficial do componente:
[Documentação do Dropdown do Bootstrap](https://getbootstrap.com/docs/5.2/components/dropdowns/)

### Exemplo desenvolvido

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Bootstrap - Dropdown</title>
    <link rel="stylesheet" href="./lib/bootstrap.min.css" />
  </head>

  <body>
    <main class="container">
      <nav class="btn-group">
        <button data-bs-toggle="dropdown" class="btn btn-primary">Cadastrar</button>
        <button class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown"></button>
        <ul class="dropdown-menu dropdown-menu-dark">
          <li>
            <a class="dropdown-item" href="#">Novo usuário</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Novo Fornecedor</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Novo funcionário</a>
          </li>
        </ul>
      </nav>
    </main>
    <script src="./lib/bootstrap.bundle.min.js"></script>
  </body>
</html>
```

Neste exemplo, criamos um dropdown com um botão principal e um botão de alternância, cada um estilizado com classes do Bootstrap. O menu suspenso contém três itens, cada um com um link:

- **btn-group**: Agrupa os botões e o menu suspenso.
- **btn**: Define o estilo dos botões.
- **dropdown-toggle**: Indica que o botão é usado para alternar a visibilidade do menu suspenso.
- **dropdown-menu**: Contém os itens do menu suspenso.
- **dropdown-item**: Representa cada item dentro do menu suspenso.

Com esse exemplo, você pode desenvolver menus dropdown estilizados e funcionais utilizando as classes de utilitários do Bootstrap, melhorando a navegação e a interação do usuário em seu projeto web.

![Exemplo de Dropdown](./Exemplo/dropdown.html)
