## 📝 Aula 03: Use Breakpoints

### ✅ Introdução aos Breakpoints

Breakpoints são pontos específicos definidos em uma folha de estilo CSS que alteram o layout e o design de uma página web com base no tamanho do viewport. Eles são essenciais para criar um design responsivo que se adapta a diferentes dispositivos e tamanhos de tela.

### ✅ O Que São Breakpoints?

Breakpoints são definidos usando media queries no CSS. Eles permitem aplicar estilos diferentes dependendo da largura, altura, orientação, resolução e outros aspectos do viewport ou do dispositivo.

### ✅ Exemplos de Media Queries Comuns

As media queries são expressões que utilizam operadores lógicos para incluir e excluir blocos de CSS com base nas características do dispositivo.

#### Exemplo de Media Query para Largura de Tela

```css
/* Estilos para dispositivos com largura mínima de 768px */
@media (min-width: 768px) {
  body {
    background-color: lightblue;
  }
}

/* Estilos para dispositivos com largura máxima de 767px */
@media (max-width: 767px) {
  body {
    background-color: lightgreen;
  }
}
```

### ✅ Definindo Breakpoints Comuns

Aqui estão alguns breakpoints comuns usados para diferentes dispositivos:

- **Dispositivos móveis**: Menos de 768px
- **Tablets**: De 768px a 1024px
- **Desktops pequenos**: De 1024px a 1200px
- **Desktops grandes**: Mais de 1200px

#### Exemplo de Uso de Breakpoints

```css
/* Estilos gerais para todos os dispositivos */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

/* Estilos para dispositivos móveis */
@media (max-width: 767px) {
  .container {
    padding: 10px;
    background-color: #f0f0f0;
  }
}

/* Estilos para tablets */
@media (min-width: 768px) and (max-width: 1023px) {
  .container {
    padding: 20px;
    background-color: #e0e0e0;
  }
}

/* Estilos para desktops pequenos */
@media (min-width: 1024px) and (max-width: 1199px) {
  .container {
    padding: 30px;
    background-color: #d0d0d0;
  }
}

/* Estilos para desktops grandes */
@media (min-width: 1200px) {
  .container {
    padding: 40px;
    background-color: #c0c0c0;
  }
}
```

### ✅ Boas Práticas para Definir Breakpoints

1. **Basear nos Conteúdos**: Defina breakpoints com base no conteúdo e no layout, e não apenas nos dispositivos.
2. **Testar em Vários Dispositivos**: Teste seu design em diferentes dispositivos e tamanhos de tela para garantir a melhor experiência do usuário.
3. **Usar Unidades Relativas**: Sempre que possível, use unidades relativas como `em` e `rem` nas media queries para garantir que o layout responda bem às configurações do usuário.

### ✅ Exemplos Práticos

#### Exemplo 1: Layout Responsivo com Breakpoints

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Exemplo de Breakpoints</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
      }
      .container {
        padding: 10px;
        background-color: #f0f0f0;
      }
      @media (min-width: 768px) {
        .container {
          padding: 20px;
          background-color: #e0e0e0;
        }
      }
      @media (min-width: 1024px) {
        .container {
          padding: 30px;
          background-color: #d0d0d0;
        }
      }
      @media (min-width: 1200px) {
        .container {
          padding: 40px;
          background-color: #c0c0c0;
        }
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>Exemplo de Breakpoints Responsivos</h1>
      <p>Este contêiner ajusta seu padding e cor de fundo com base no tamanho do viewport.</p>
    </div>
  </body>
</html>
```

### ✅ Conclusão

O uso de breakpoints é essencial para criar layouts responsivos que se adaptam a diferentes dispositivos e tamanhos de tela. Definindo media queries apropriadas e testando seu design em vários dispositivos, você pode garantir uma experiência de usuário consistente e agradável. Utilize boas práticas para definir breakpoints baseados no conteúdo e no layout, e use unidades relativas para uma maior flexibilidade e acessibilidade.

[Material](./Use%20breakpoints.pdf)
