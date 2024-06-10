## 📝 Aula 06: Altere a Posição (Position)

### ✅ O que é a Propriedade Position?

A propriedade `position` no CSS determina como um elemento é posicionado no documento. Existem diferentes valores para a propriedade `position`, e cada um altera o comportamento e a posição de um elemento de maneira específica.

### ✅ Valores da Propriedade Position

#### **position: static**

- Valor padrão.
- Elementos são posicionados de acordo com o fluxo normal do documento.
- Propriedades `top`, `right`, `bottom` e `left` não têm efeito.

```css
.elemento {
  position: static;
}
```

#### **position: relative**

- Elementos são posicionados de acordo com o fluxo normal, mas podem ser ajustados em relação à sua posição original.
- As propriedades `top`, `right`, `bottom` e `left` deslocam o elemento a partir de sua posição normal.

```css
.elemento {
  position: relative;
  top: 10px;
  left: 20px;
}
```

#### **position: absolute**

- Elementos são posicionados em relação ao contêiner posicionado mais próximo (não estático).
- Se não houver contêiner posicionado, o elemento será posicionado em relação ao elemento `<html>`.
- As propriedades `top`, `right`, `bottom` e `left` especificam a posição do elemento.

```css
.elemento {
  position: absolute;
  top: 50px;
  left: 100px;
}
```

#### **position: fixed**

- Elementos são posicionados em relação à janela do navegador e não se movem quando a página é rolada.
- As propriedades `top`, `right`, `bottom` e `left` especificam a posição do elemento.

```css
.elemento {
  position: fixed;
  top: 0;
  right: 0;
}
```

#### **position: sticky**

- Elementos alternam entre `relative` e `fixed`, dependendo da posição de rolagem.
- Eles se comportam como `relative` até que atinjam um limiar definido pelas propriedades `top`, `right`, `bottom` ou `left`, então se comportam como `fixed`.

```css
.elemento {
  position: sticky;
  top: 20px;
}
```

### ✅ Exemplo de Uso da Propriedade Position

Vamos considerar um exemplo prático onde usamos diferentes valores da propriedade `position` para posicionar elementos.

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Exemplo de Position</title>
    <style>
      .container {
        position: relative;
        width: 300px;
        height: 200px;
        border: 1px solid black;
      }
      .static {
        position: static;
        background-color: lightblue;
      }
      .relative {
        position: relative;
        top: 20px;
        left: 20px;
        background-color: lightgreen;
      }
      .absolute {
        position: absolute;
        top: 50px;
        left: 50px;
        background-color: lightcoral;
      }
      .fixed {
        position: fixed;
        top: 0;
        right: 0;
        background-color: lightyellow;
      }
      .sticky {
        position: sticky;
        top: 10px;
        background-color: lightpink;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="static">Static</div>
      <div class="relative">Relative</div>
      <div class="absolute">Absolute</div>
    </div>
    <div class="fixed">Fixed</div>
    <div class="sticky">Sticky</div>
  </body>
</html>
```

Neste exemplo:

- `.static` é posicionado de acordo com o fluxo normal do documento.
- `.relative` é deslocado 20px para baixo e 20px para a direita de sua posição original.
- `.absolute` é posicionado 50px abaixo e 50px à direita do contêiner `.container`.
- `.fixed` é posicionado no canto superior direito da janela do navegador.
- `.sticky` se comporta como `relative` até ser rolado a 10px do topo da janela.

[Material](<./Altere%20a%20posição%20(Position).pdf>)
