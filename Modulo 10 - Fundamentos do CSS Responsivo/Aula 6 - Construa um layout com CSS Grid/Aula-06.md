# 📝 Aula 05: Construa um Layout com CSS Grid

## ✅ Introdução ao CSS Grid

O CSS Grid é uma poderosa ferramenta para criação de layouts em CSS. Ele permite criar designs complexos e responsivos de forma simples e eficiente, utilizando uma grade bidimensional de linhas e colunas.

## ✅ Conceitos Básicos do CSS Grid

### Container e Itens de Grid

O CSS Grid funciona com dois componentes principais:

- **Container de Grid**: O elemento pai que define a área de grid.
- **Itens de Grid**: Os elementos filhos dentro do container de grid que são posicionados na grade.

### Criando um Container de Grid

Para transformar um elemento em um container de grid, utiliza-se a propriedade `display: grid;`.

```css
.container {
  display: grid;
}
```

### Definindo Linhas e Colunas

Você pode definir o número de linhas e colunas usando as propriedades `grid-template-rows` e `grid-template-columns`.

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr; /* Duas colunas de tamanho igual */
  grid-template-rows: auto 200px; /* Duas linhas, a primeira automática e a segunda com 200px */
}
```

### Posicionando Itens na Grade

Para posicionar itens na grade, você pode usar as propriedades `grid-column` e `grid-row`.

```css
.item1 {
  grid-column: 1 / 3; /* Ocupa da coluna 1 até a 3 (abrange duas colunas) */
  grid-row: 1; /* Primeira linha */
}
```

## ✅ Exemplo Prático de Layout com CSS Grid

Vamos criar um layout simples com um cabeçalho, um menu lateral, um conteúdo principal e um rodapé.

### Estrutura HTML

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Layout com CSS Grid</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div class="container">
      <header class="header">Cabeçalho</header>
      <nav class="sidebar">Menu Lateral</nav>
      <main class="content">Conteúdo Principal</main>
      <footer class="footer">Rodapé</footer>
    </div>
  </body>
</html>
```

### Estilos CSS

```css
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

.container {
  display: grid;
  grid-template-columns: 200px 1fr; /* Menu lateral fixo e conteúdo principal flexível */
  grid-template-rows: 100px 1fr 50px; /* Cabeçalho fixo, conteúdo flexível e rodapé fixo */
  height: 100vh;
}

.header {
  grid-column: 1 / 3;
  background-color: #4caf50;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sidebar {
  background-color: #f4f4f4;
  padding: 15px;
}

.content {
  background-color: #fff;
  padding: 15px;
}

.footer {
  grid-column: 1 / 3;
  background-color: #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

### Explicação

- **Container de Grid**: Definimos a grade com duas colunas e três linhas.
- **Itens de Grid**: O cabeçalho e o rodapé ocupam toda a largura (duas colunas), enquanto o menu lateral e o conteúdo principal ocupam suas respectivas áreas.

## ✅ Tornando o Layout Responsivo

Para garantir que o layout funcione bem em diferentes tamanhos de tela, utilizamos media queries.

```css
@media (max-width: 600px) {
  .container {
    grid-template-columns: 1fr; /* Uma coluna em telas pequenas */
    grid-template-rows: auto auto 1fr auto; /* Reorganiza as linhas */
  }

  .sidebar {
    grid-row: 2; /* Move o menu lateral para abaixo do cabeçalho */
  }

  .content {
    grid-row: 3; /* Move o conteúdo principal para abaixo do menu lateral */
  }
}
```

## ✅ Conclusão

O CSS Grid é uma ferramenta versátil e poderosa para criar layouts de forma eficiente. Com as propriedades básicas, você pode construir layouts complexos e responsivos que se adaptam a diferentes tamanhos de tela.
