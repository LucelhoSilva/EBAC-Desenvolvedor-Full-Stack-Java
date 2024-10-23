## 📝 Aula 02: Trabalhe com Unidades Flexíveis de Medidas

### ✅ Introdução às Unidades de Medida

No desenvolvimento web, utilizamos diferentes unidades de medida para definir tamanhos, margens, espaçamentos e outras propriedades CSS. As unidades podem ser classificadas em fixas e flexíveis.

### ✅ Unidades Fixas

As unidades fixas não se adaptam ao tamanho do viewport ou às configurações do usuário. Dois exemplos comuns são:

- **Pixels (px)**: Uma unidade de medida absoluta. Utilizar pixels pode garantir precisão, mas não é responsivo.
- **Pontos (pt)**: Utilizada principalmente para impressão, um ponto é igual a 1/72 de uma polegada.

### ✅ Unidades Flexíveis

Unidades flexíveis se adaptam ao tamanho do viewport, ao contexto do elemento pai, ou às configurações do usuário. Isso as torna ideais para design responsivo. As principais unidades flexíveis são `vw`, `vh`, `em`, `rem` e porcentagem (`%`).

#### **VW e VH (Viewport Width e Viewport Height)**

- **1vw**: Corresponde a 1% da largura do viewport.
- **1vh**: Corresponde a 1% da altura do viewport.

Essas unidades são úteis para criar layouts que se ajustam dinamicamente ao tamanho da janela de visualização.

##### Exemplo de Uso de `vw` e `vh`

```css
.elemento {
  width: 50vw; /* 50% da largura do viewport */
  height: 30vh; /* 30% da altura do viewport */
}
```

#### **EM e REM**

- **em**: Relativa ao tamanho da fonte do elemento pai. Por exemplo, se o tamanho da fonte do elemento pai for 16px, 2em será igual a 32px.
- **rem**: Relativa ao tamanho da fonte do elemento raiz (`<html>`). Por exemplo, se o tamanho da fonte do elemento raiz for 16px, 2rem será igual a 32px.

Essas unidades são úteis para manter proporções relativas e melhorar a acessibilidade, já que se ajustam de acordo com as preferências de fonte do usuário.

##### Exemplo de Uso de `em` e `rem`

```css
body {
  font-size: 16px; /* Tamanho da fonte do elemento raiz */
}

h1 {
  font-size: 2em; /* 32px, relativo ao elemento pai */
}

p {
  font-size: 1rem; /* 16px, relativo ao elemento raiz */
}
```

#### **Porcentagem (%)**

A porcentagem é relativa ao elemento pai. Pode ser usada para definir largura, altura, margens, paddings, entre outros, em relação ao tamanho do contêiner pai.

##### Exemplo de Uso de Porcentagem

```css
.container {
  width: 100%; /* 100% da largura do elemento pai */
}

.elemento {
  width: 50%; /* 50% da largura do contêiner pai */
}
```

### ✅ Vantagens das Unidades Flexíveis

- **Responsividade**: Adapta-se a diferentes tamanhos de tela e dispositivos.
- **Acessibilidade**: Melhora a legibilidade e usabilidade ao se ajustar às preferências do usuário.
- **Flexibilidade**: Permite criar layouts fluidos que respondem dinamicamente ao tamanho do viewport e ao contexto.

### ✅ Exemplos Práticos

#### Exemplo 1: Layout Responsivo com `vw`, `vh`, `em` e Porcentagem

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Exemplo de Unidades Flexíveis</title>
    <style>
      body {
        font-size: 16px;
        margin: 0;
        padding: 0;
      }
      .header {
        background-color: #4caf50;
        height: 20vh; /* 20% da altura do viewport */
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
      }
      .main {
        height: 60vh; /* 60% da altura do viewport */
        background-color: #f0f0f0;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2em; /* 2 vezes o tamanho da fonte do elemento pai */
      }
      .footer {
        background-color: #333;
        height: 20vh; /* 20% da altura do viewport */
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .content {
        width: 80%; /* 80% da largura do elemento pai */
        background-color: white;
        padding: 1rem; /* 1 vez o tamanho da fonte do elemento raiz */
      }
    </style>
  </head>
  <body>
    <div class="header">
      <h1>Cabeçalho Responsivo</h1>
    </div>
    <div class="main">
      <div class="content">
        <p>Conteúdo Principal Ajustado ao Viewport e Unidades Flexíveis</p>
      </div>
    </div>
    <div class="footer">
      <p>Rodapé Responsivo</p>
    </div>
  </body>
</html>
```

### ✅ Conclusão

O uso de unidades flexíveis como `vw`, `vh`, `em`, `rem` e porcentagem é fundamental para criar layouts responsivos e acessíveis. Essas unidades permitem que os elementos se ajustem dinamicamente ao tamanho do viewport e ao contexto do elemento pai, proporcionando uma experiência de usuário consistente e agradável em diferentes dispositivos e tamanhos de tela.

[Material](./Trabalhe%20com%20unidades%20flexíveis%20de%20medidas.pdf)
