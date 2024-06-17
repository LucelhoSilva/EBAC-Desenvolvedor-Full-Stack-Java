## 📝 Aula 04: Configure a Página com Box Sizing

### ✅ O que é Box Sizing?

No CSS, a propriedade `box-sizing` altera a forma como a largura e a altura de um elemento são calculadas. Por padrão, o CSS utiliza o valor `content-box`, que inclui apenas o conteúdo nas dimensões definidas. Com `box-sizing: border-box`, o padding e a borda são incluídos nas dimensões totais do elemento.

### ✅ Benefícios de Usar Box Sizing

O uso de `box-sizing: border-box` simplifica o controle de layouts e evita cálculos complexos de largura e altura, uma vez que padding e borda já estão incluídos no tamanho total do elemento. Isso é particularmente útil para criar layouts responsivos e consistentes.

### ✅ Como Configurar Box Sizing

Para configurar `box-sizing` em uma página web, você pode aplicar a configuração a todos os elementos usando a regra universal (`*`). Esta abordagem garante que todos os elementos e pseudo-elementos utilizem o modelo `border-box`.

```css
/* Aplica box-sizing: border-box a todos os elementos */
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

### ✅ Exemplo de Uso de Box Sizing

Vamos considerar um exemplo prático onde usamos `box-sizing: border-box` para configurar uma página com uma div que possui padding e borda.

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Exemplo de Box Sizing</title>
    <style>
      /* Configura box-sizing: border-box para toda a página */
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      .caixa {
        width: 200px;
        height: 100px;
        padding: 20px;
        border: 10px solid black;
        background-color: lightblue;
      }
    </style>
  </head>
  <body>
    <div class="caixa">Conteúdo</div>
  </body>
</html>
```

Neste exemplo, a div `.caixa` terá uma largura e altura totais de 200px e 100px, respectivamente, já incluindo o padding e a borda.

### ✅ Por que Usar Box Sizing: Border-Box?

- **Consistência**: Facilita a criação de layouts consistentes, pois não é necessário somar manualmente padding e borda às dimensões.
- **Manutenção**: Simplifica a manutenção do CSS, já que as dimensões dos elementos são mais previsíveis.
- **Responsividade**: Melhora a adaptação dos elementos em diferentes tamanhos de tela, essencial para design responsivo.

[Material](./Configure_a_página_com_box_sizing.pdf)
