# 📝 Aula 05: Crie um Menu Dropdown

## ✅ Introdução ao Menu Dropdown Responsivo

Menus dropdown são elementos essenciais na navegação de sites, permitindo a organização eficiente de links e informações. Criar um menu dropdown que funcione de forma responsiva em diferentes tamanhos de tela e dispositivos é crucial para garantir uma boa experiência do usuário.

## ✅ Conceito de Menu Dropdown

Um menu dropdown é um elemento de interface que exibe uma lista de opções quando o usuário interage com um elemento de controle, como um botão ou link. Este tipo de menu ajuda a economizar espaço na tela e mantém a navegação organizada e limpa.

## ✅ Importância de um Menu Responsivo

Com a crescente variedade de dispositivos e tamanhos de tela, é essencial que os menus dropdown sejam responsivos. Isso garante que os usuários possam navegar eficientemente, independentemente do dispositivo que estão usando, melhorando a usabilidade e a experiência do usuário.

## ✅ Estrutura HTML de um Menu Dropdown

### Marcação Básica

A estrutura básica de um menu dropdown envolve a utilização de listas não ordenadas (`<ul>`) e listas ordenadas (`<li>`). Aqui está um exemplo simples:

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Menu Dropdown</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <nav>
      <ul class="menu">
        <li><a href="#">Home</a></li>
        <li>
          <a href="#">Sobre</a>
          <ul class="dropdown">
            <li><a href="#">História</a></li>
            <li><a href="#">Equipe</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </li>
        <li><a href="#">Serviços</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Contato</a></li>
      </ul>
    </nav>
  </body>
</html>
```

### Adicionando Classes CSS

As classes CSS são utilizadas para aplicar estilos e controlar a aparência do menu dropdown. No exemplo acima, utilizamos as classes `menu` e `dropdown` para facilitar a estilização.

## ✅ Estilização do Menu com CSS

### Estilos Básicos

Para estilizar o menu dropdown, podemos começar com alguns estilos básicos para os itens do menu e o dropdown:

```css
/* Estilos básicos para o menu */
.menu {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  background-color: #333;
}

.menu li {
  position: relative;
}

.menu a {
  display: block;
  padding: 15px 20px;
  color: #fff;
  text-decoration: none;
}

.menu a:hover {
  background-color: #575757;
}

/* Estilos básicos para o dropdown */
.dropdown {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #333;
  list-style: none;
  padding: 0;
  margin: 0;
}

.dropdown li a {
  padding: 10px 20px;
}
```

### Técnicas de Posicionamento

Para garantir que o menu dropdown seja posicionado corretamente, utilizamos propriedades CSS como `position`, `top`, e `left`. Isso ajuda a controlar onde o menu dropdown será exibido em relação ao item principal do menu.

## ✅ Interações de Hover e Clique

### Implementação de Hover

Para que o menu dropdown apareça ao passar o mouse sobre o item principal, podemos usar a pseudo-classe `:hover`:

```css
.menu li:hover > .dropdown {
  display: block;
}
```

### Implementação de Clique

Para que o menu dropdown seja exibido ao clicar no item principal, precisamos adicionar um pouco de JavaScript:

```html
<script>
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".menu > li > a").forEach(function (item) {
      item.addEventListener("click", function (event) {
        var dropdown = this.nextElementSibling
        if (dropdown && dropdown.classList.contains("dropdown")) {
          event.preventDefault()
          dropdown.style.display = dropdown.style.display === "block" ? "none" : "block"
        }
      })
    })
  })
</script>
```

## ✅ Tornando o Menu Responsivo

### Media Queries

Para garantir que o menu funcione bem em dispositivos móveis, utilizamos media queries para ajustar o layout e o comportamento do menu:

```css
@media (max-width: 768px) {
  .menu {
    flex-direction: column;
  }

  .menu li {
    width: 100%;
  }

  .dropdown {
    position: static;
  }
}
```

### Ajustes para Dispositivos Móveis

Para melhorar a usabilidade em dispositivos móveis, podemos adicionar um botão de menu (também conhecido como "hamburger menu") que expande ou colapsa o menu:

```html
<button id="menu-toggle">Menu</button>

<script>
  document.getElementById("menu-toggle").addEventListener("click", function () {
    var menu = document.querySelector(".menu")
    menu.style.display = menu.style.display === "block" ? "none" : "block"
  })
</script>
```

## ✅ Boas Práticas para Menus Dropdown

### Acessibilidade

Garantir que o menu dropdown seja acessível é crucial. Utilize atributos ARIA (`aria-haspopup`, `aria-expanded`) e garanta que o menu possa ser navegado usando o teclado.
