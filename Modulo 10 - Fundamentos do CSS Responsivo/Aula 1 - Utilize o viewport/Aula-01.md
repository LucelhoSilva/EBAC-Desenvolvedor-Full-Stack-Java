## 📝 Aula 01: Utilize o Viewport

### ✅ Introdução ao Viewport

O viewport é a área visível de uma página web no dispositivo do usuário. Entender e utilizar corretamente o viewport é essencial para o design responsivo, garantindo que a página se adapte a diferentes tamanhos de tela e resoluções, proporcionando uma experiência de usuário consistente e agradável.

### ✅ A Meta Tag Viewport

A meta tag viewport é utilizada para controlar o layout da página em dispositivos móveis. Ela permite definir a escala inicial, a largura, e outras propriedades que influenciam como o conteúdo é exibido em diferentes telas.

#### Exemplo Básico da Meta Tag Viewport

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

### ✅ Atributos Comuns da Meta Tag Viewport

- **width**: Define a largura do viewport. Pode ser um valor específico em pixels ou a palavra-chave `device-width` para ajustar a largura à do dispositivo.
- **initial-scale**: Define o nível de zoom inicial da página quando carregada pela primeira vez. O valor 1.0 significa sem zoom.
- **maximum-scale**: Define o nível máximo de zoom que o usuário pode aplicar.
- **minimum-scale**: Define o nível mínimo de zoom que o usuário pode aplicar.
- **user-scalable**: Define se o usuário pode ou não aumentar ou diminuir o zoom da página.

#### Exemplo de Uso Completo da Meta Tag Viewport

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
```

### ✅ Importância do Viewport no Design Responsivo

1. **Adaptação a Diferentes Dispositivos**: Define como o conteúdo será exibido em diferentes dispositivos, como smartphones, tablets e desktops.
2. **Melhor Experiência do Usuário**: Garante que o texto e os elementos visuais sejam legíveis e utilizáveis sem a necessidade de zoom ou rolagem horizontal.
3. **SEO e Performance**: Páginas otimizadas para dispositivos móveis têm melhor desempenho em termos de SEO e carregam mais rapidamente.

### ✅ Unidades de Medida Relacionadas ao Viewport: `vh` e `vw`

As unidades `vh` (viewport height) e `vw` (viewport width) são unidades relativas que facilitam a criação de layouts responsivos ao se basearem nas dimensões do viewport.

- **1vh**: Corresponde a 1% da altura do viewport.
- **1vw**: Corresponde a 1% da largura do viewport.

#### Exemplo de Uso de `vh` e `vw`

```css
/* Define uma altura de 50% da altura do viewport */
.elemento {
  height: 50vh;
}

/* Define uma largura de 100% da largura do viewport */
.banner {
  width: 100vw;
}
```

#### Exemplo Prático

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Exemplo de Viewport e Unidades Relativas</title>
    <style>
      body {
        font-family: Arial, sans-serif;
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
      }
      .footer {
        background-color: #333;
        height: 20vh; /* 20% da altura do viewport */
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    </style>
  </head>
  <body>
    <div class="header">
      <h1>Cabeçalho Responsivo</h1>
    </div>
    <div class="main">
      <p>Conteúdo Principal Ajustado ao Viewport</p>
    </div>
    <div class="footer">
      <p>Rodapé Responsivo</p>
    </div>
  </body>
</html>
```

### ✅ Boas Práticas ao Utilizar o Viewport e Unidades Relativas

- **Defina a Largura Corretamente**: Usar `width=device-width` ajusta a largura do viewport à largura da tela do dispositivo, proporcionando um layout adaptável.
- **Escala Inicial Apropriada**: `initial-scale=1.0` garante que a página não esteja ampliada ou reduzida inicialmente.
- **Unidades `vh` e `vw`**: Use `vh` e `vw` para criar layouts que se ajustem dinamicamente ao tamanho do viewport, melhorando a responsividade.

### ✅ Conclusão

O uso adequado da meta tag viewport, junto com unidades de medida como `vh` e `vw`, é fundamental para criar layouts responsivos que se adaptam a diferentes tamanhos de tela e resoluções. Ao definir corretamente a largura, a escala inicial e utilizar unidades relativas ao viewport, você garante uma experiência de usuário consistente e agradável, melhorando a usabilidade e a acessibilidade de suas páginas web.

Para mais detalhes e exemplos práticos, consulte o material complementar fornecido na Aula 01.

Espero que isso seja útil para você aprender sobre a utilização do viewport e unidades `vh` e `vw` no design responsivo com CSS!as em JavaScript.

[Material](./Utilize%20o%20viewport.pdf)
