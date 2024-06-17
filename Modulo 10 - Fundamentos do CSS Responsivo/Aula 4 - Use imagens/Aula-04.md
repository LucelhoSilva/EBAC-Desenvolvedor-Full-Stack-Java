## 📝 Aula 04: Use Imagens

### ✅ Introdução ao Uso de Imagens no CSS

Imagens são um elemento crucial no design de páginas web, contribuindo para a estética, usabilidade e transmissão de informações. Utilizar imagens de forma eficaz é essencial para criar layouts atraentes e funcionais.

### ✅ Formatos de Imagens

Existem diversos formatos de imagens, cada um com suas próprias vantagens e desvantagens:

- **JPEG (JPG)**: Bom para fotografias e imagens com muitas cores. Compressão com perdas, o que pode afetar a qualidade.
- **PNG**: Ideal para imagens com transparência e gráficos com poucos detalhes. Compressão sem perdas.
- **GIF**: Utilizado para animações simples. Suporte limitado de cores e transparência.
- **SVG**: Gráficos vetoriais escaláveis. Ótimo para logotipos e ícones.
- **WEBP**: Formato moderno que oferece compressão superior a JPEG e PNG, com ou sem perdas.

### ✅ Adicionando Imagens no CSS

Imagens podem ser adicionadas ao CSS utilizando a propriedade `background-image`. Esta abordagem é útil para adicionar imagens de fundo a elementos HTML.

#### Exemplo de Uso de `background-image`

```css
.container {
  width: 100%;
  height: 400px;
  background-image: url("imagem.jpg");
  background-size: cover; /* Ajusta a imagem para cobrir todo o contêiner */
  background-position: center; /* Centraliza a imagem */
}
```

### ✅ Propriedades Importantes para Imagens

1. **background-size**: Define o tamanho da imagem de fundo.

   - `cover`: A imagem cobre todo o contêiner.
   - `contain`: A imagem se ajusta dentro do contêiner, mantendo a proporção.

2. **background-position**: Define a posição da imagem de fundo.

   - Valores comuns: `center`, `top`, `bottom`, `left`, `right`.

3. **background-repeat**: Define se a imagem de fundo será repetida.
   - Valores: `repeat`, `no-repeat`, `repeat-x`, `repeat-y`.

#### Exemplo de Uso de Propriedades de Imagem

```css
.header {
  width: 100%;
  height: 300px;
  background-image: url("header.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
```

### ✅ Imagens Responsivas

Para tornar as imagens responsivas, é importante que elas se ajustem ao tamanho do viewport. Utilizar porcentagens ou unidades flexíveis pode ajudar a alcançar esse objetivo.

#### Exemplo de Imagem Responsiva

```css
img.responsiva {
  width: 100%;
  height: auto; /* Mantém a proporção da imagem */
}
```

### ✅ Exemplos Práticos

#### Exemplo 1: Adicionando Imagem de Fundo Responsiva

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Exemplo de Imagens no CSS</title>
    <style>
      .hero {
        width: 100%;
        height: 500px;
        background-image: url("hero.jpg");
        background-size: cover;
        background-position: center;
      }
    </style>
  </head>
  <body>
    <div class="hero">
      <h1>Bem-vindo ao Nosso Site</h1>
    </div>
  </body>
</html>
```

#### Exemplo 2: Imagem Responsiva em uma Tag `<img>`

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Exemplo de Imagem Responsiva</title>
    <style>
      .container {
        max-width: 600px;
        margin: 0 auto;
      }
      img.responsiva {
        width: 100%;
        height: auto;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <img src="imagem.jpg" alt="Descrição da imagem" class="responsiva" />
    </div>
  </body>
</html>
```

### ✅ Boas Práticas para Uso de Imagens

1. **Otimizar Imagens**: Reduza o tamanho do arquivo sem sacrificar a qualidade para melhorar o tempo de carregamento.
2. **Usar Formatos Apropriados**: Escolha o formato de imagem certo para o tipo de conteúdo.
3. **Incluir Texto Alternativo**: Adicione descrições significativas ao atributo `alt` para acessibilidade e SEO.
4. **Utilizar Sprites**: Combine várias imagens pequenas em uma única imagem para reduzir o número de requisições HTTP.

### ✅ Conclusão

Utilizar imagens de forma eficaz no CSS é essencial para criar designs atraentes e responsivos. Entender as propriedades de imagens e boas práticas pode melhorar a estética e a performance do seu site.

[Material](./Use%20imagens.pdf)
