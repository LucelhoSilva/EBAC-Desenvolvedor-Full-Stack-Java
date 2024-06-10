## 📝 Aula 03: Box Model

### ✅ O que é o Box Model?

No CSS, todos os elementos são representados como caixas retangulares. O Box Model (Modelo de Caixa) é um conceito fundamental que descreve como os elementos são dispostos na página. Ele é composto por quatro áreas principais:

1. **Conteúdo**: A área onde o conteúdo do elemento é exibido, como texto ou imagens.
2. **Padding (Preenchimento)**: A área ao redor do conteúdo, dentro da borda, que adiciona espaço interno.
3. **Borda (Border)**: A linha ao redor do padding e do conteúdo, que pode ter espessura, estilo e cor.
4. **Margem (Margin)**: A área fora da borda, que adiciona espaço externo ao redor do elemento.

<br>

### ✅ Estrutura do Box Model

A estrutura do Box Model pode ser visualizada da seguinte maneira:

```
---------------------
|      Margem       |
---------------------
|      Borda        |
---------------------
|    Preenchimento  |
---------------------
|     Conteúdo      |
---------------------
```

### ✅ Propriedades do Box Model

#### **Conteúdo**

- `width`: Define a largura do conteúdo.
- `height`: Define a altura do conteúdo.

#### **Padding**

- `padding-top`: Define o preenchimento na parte superior.
- `padding-right`: Define o preenchimento à direita.
- `padding-bottom`: Define o preenchimento na parte inferior.
- `padding-left`: Define o preenchimento à esquerda.
- `padding`: Define o preenchimento em todos os lados (pode aceitar valores únicos ou múltiplos).

#### **Borda**

- `border-width`: Define a largura da borda.
- `border-style`: Define o estilo da borda (solid, dashed, dotted, etc.).
- `border-color`: Define a cor da borda.
- `border`: Define a largura, estilo e cor da borda em uma única declaração.

#### **Margem**

- `margin-top`: Define a margem na parte superior.
- `margin-right`: Define a margem à direita.
- `margin-bottom`: Define a margem na parte inferior.
- `margin-left`: Define a margem à esquerda.
- `margin`: Define a margem em todos os lados (pode aceitar valores únicos ou múltiplos).

### ✅ Exemplo de Box Model

Considere o seguinte exemplo de um elemento `div`:

```html
<div class="caixa">Conteúdo</div>
```

```css
.caixa {
  width: 200px;
  height: 100px;
  padding: 10px;
  border: 5px solid black;
  margin: 20px;
}
```

Neste exemplo, a `div` terá:

- Largura do conteúdo: 200px
- Altura do conteúdo: 100px
- Padding: 10px em todos os lados
- Borda: 5px sólida e preta em todos os lados
- Margem: 20px em todos os lados

### ✅ Modelo de Caixa Alternativo

O CSS também permite alterar o comportamento padrão do Box Model usando a propriedade `box-sizing`.

- `box-sizing: content-box`: Este é o valor padrão, onde `width` e `height` incluem apenas o conteúdo. Padding, borda e margem são adicionados fora dessas dimensões.
- `box-sizing: border-box`: Aqui, `width` e `height` incluem conteúdo, padding e borda, mas não a margem.

```css
.caixa {
  box-sizing: border-box;
}
```

Usar `box-sizing: border-box` pode simplificar o controle de dimensões dos elementos, especialmente ao lidar com layouts complexos.

<br>

### ✅ Conclusão

Entender o Box Model é essencial para manipular o layout dos elementos de uma página web de forma eficaz. O domínio deste conceito permite criar designs mais precisos e responsivos.

[Material](<./Aprenda box model.pdf>)
