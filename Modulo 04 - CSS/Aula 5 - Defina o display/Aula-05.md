## 📝 Aula 05: Defina o Display

### ✅ O que é a Propriedade Display?

A propriedade `display` no CSS controla como um elemento HTML é exibido na página. Ela determina se o elemento é tratado como um bloco, inline, flexível, grid, entre outros. Alterar o valor de `display` pode impactar significativamente o layout e o comportamento dos elementos na página.

### ✅ Valores Comuns da Propriedade Display

#### **display: block**

- Elementos ocupam a largura total do contêiner.
- Cada elemento começa em uma nova linha.
- Exemplo de elementos: `<div>`, `<h1>`, `<p>`.

```css
div {
  display: block;
}
```

#### **display: inline**

- Elementos ocupam apenas a largura necessária para seu conteúdo.
- Vários elementos podem estar na mesma linha.
- Exemplo de elementos: `<span>`, `<a>`, `<strong>`.

```css
span {
  display: inline;
}
```

#### **display: inline-block**

- Combina características de `block` e `inline`.
- Elementos ocupam apenas a largura necessária, mas permitem definir largura e altura.
- Exemplo de uso: ícones com texto ao lado.

```css
img {
  display: inline-block;
}
```

#### **display: none**

- O elemento não é exibido e não ocupa espaço no layout.
- Útil para esconder elementos sem removê-los do DOM.

```css
.hidden {
  display: none;
}
```

### ✅ Layouts Avançados com Display

#### **display: flex**

- Utilizado para criar layouts flexíveis.
- Elementos filhos de um contêiner flexível podem ser alinhados e distribuídos conforme necessário.

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

#### **display: grid**

- Utilizado para criar layouts de grade.
- Permite definir linhas e colunas para posicionar elementos de maneira precisa.

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
}
```

### ✅ Exemplo de Uso da Propriedade Display

Vamos considerar um exemplo prático onde usamos diferentes valores da propriedade `display` para configurar um layout de página.

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Exemplo de Display</title>
    <style>
      .container {
        display: flex;
        justify-content: space-between;
      }
      .item {
        width: 100px;
        height: 100px;
        background-color: lightblue;
        margin: 10px;
      }
      .hidden {
        display: none;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="item">Item 1</div>
      <div class="item hidden">Item 2 (escondido)</div>
      <div class="item">Item 3</div>
    </div>
  </body>
</html>
```

Neste exemplo:

- O contêiner usa `display: flex` para alinhar os itens.
- O segundo item está escondido usando `display: none`.

### ✅ Resumo

A propriedade `display` é fundamental para controlar o comportamento e o layout dos elementos na página. Conhecer os diferentes valores e como utilizá-los permite criar layouts versáteis e eficientes. Seja ajustando um simples elemento de texto ou construindo um layout complexo, entender `display` é essencial para o desenvolvimento web.

[Material](./Defina_o_display.pdf)
