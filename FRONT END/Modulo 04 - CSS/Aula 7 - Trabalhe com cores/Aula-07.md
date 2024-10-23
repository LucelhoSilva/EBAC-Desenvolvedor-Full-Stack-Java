## 📝 Aula 07: Trabalhe com Cores

### ✅ Introdução às Cores no CSS

As cores são uma parte essencial do design de qualquer página web. No CSS, podemos definir cores de diversas maneiras, como através de nomes de cores, valores hexadecimais, valores RGB, valores RGBA, valores HSL e valores HSLA.

### ✅ Nomes de Cores

O CSS suporta um conjunto de nomes de cores predefinidos que podem ser usados diretamente. Por exemplo:

```css
.elemento {
  color: red; /* Define a cor do texto como vermelho */
  background-color: blue; /* Define a cor de fundo como azul */
}
```

### ✅ Valores Hexadecimais

Os valores hexadecimais são representados por um símbolo `#` seguido de seis dígitos (0-9, A-F), onde os dois primeiros representam o vermelho, os dois do meio representam o verde e os dois últimos representam o azul.

```css
.elemento {
  color: #ff0000; /* Vermelho */
  background-color: #0000ff; /* Azul */
}
```

### ✅ Valores RGB

Os valores RGB definem as cores através da combinação de vermelho (Red), verde (Green) e azul (Blue), com valores variando de 0 a 255.

```css
.elemento {
  color: rgb(255, 0, 0); /* Vermelho */
  background-color: rgb(0, 0, 255); /* Azul */
}
```

### ✅ Valores RGBA

Os valores RGBA são uma extensão dos valores RGB com um canal alfa (Alpha) que define a opacidade da cor, onde 0 é totalmente transparente e 1 é totalmente opaco.

```css
.elemento {
  color: rgba(255, 0, 0, 1); /* Vermelho opaco */
  background-color: rgba(0, 0, 255, 0.5); /* Azul semi-transparente */
}
```

### ✅ Valores HSL

Os valores HSL representam cores através de matiz (Hue), saturação (Saturation) e luminosidade (Lightness). A matiz é um valor de grau (0 a 360), enquanto a saturação e a luminosidade são percentuais (0% a 100%).

```css
.elemento {
  color: hsl(0, 100%, 50%); /* Vermelho */
  background-color: hsl(240, 100%, 50%); /* Azul */
}
```

### ✅ Valores HSLA

Os valores HSLA são uma extensão dos valores HSL com um canal alfa para definir a opacidade da cor.

```css
.elemento {
  color: hsla(0, 100%, 50%, 1); /* Vermelho opaco */
  background-color: hsla(240, 100%, 50%, 0.5); /* Azul semi-transparente */
}
```

### ✅ Exemplo Prático de Uso de Cores

Vamos criar um exemplo prático utilizando diferentes formas de definir cores no CSS.

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Exemplo de Cores no CSS</title>
    <style>
      .nomes-de-cores {
        color: red;
        background-color: blue;
      }
      .valores-hexadecimais {
        color: #ff0000;
        background-color: #0000ff;
      }
      .valores-rgb {
        color: rgb(255, 0, 0);
        background-color: rgb(0, 0, 255);
      }
      .valores-rgba {
        color: rgba(255, 0, 0, 1);
        background-color: rgba(0, 0, 255, 0.5);
      }
      .valores-hsl {
        color: hsl(0, 100%, 50%);
        background-color: hsl(240, 100%, 50%);
      }
      .valores-hsla {
        color: hsla(0, 100%, 50%, 1);
        background-color: hsla(240, 100%, 50%, 0.5);
      }
    </style>
  </head>
  <body>
    <div class="nomes-de-cores">Nomes de Cores</div>
    <div class="valores-hexadecimais">Valores Hexadecimais</div>
    <div class="valores-rgb">Valores RGB</div>
    <div class="valores-rgba">Valores RGBA</div>
    <div class="valores-hsl">Valores HSL</div>
    <div class="valores-hsla">Valores HSLA</div>
  </body>
</html>
```

Neste exemplo, cada div utiliza uma forma diferente de definir as cores do texto e do fundo.

[Material](./Trabalhe%20com%20cores.pdf)
