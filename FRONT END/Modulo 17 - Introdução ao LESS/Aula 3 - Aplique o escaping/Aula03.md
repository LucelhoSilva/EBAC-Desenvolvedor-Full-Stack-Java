## 📝 Aula 03: Aplique o Escaping

### Conceituar "Escaping" no LESS

No LESS, "escaping" é uma técnica usada para garantir que certas expressões sejam interpretadas como literais de string em vez de serem processadas como código. Isso é útil ao definir variáveis de mídia e outras regras CSS que podem conter caracteres especiais.

### Usar o "@" para Definir Variáveis de Mídia no LESS

Ao utilizar o "escaping", podemos definir variáveis de mídia no LESS para simplificar a gestão de regras condicionais com base em diferentes resoluções de tela. O símbolo `~` é usado para "escapar" uma string, garantindo que ela seja interpretada corretamente.

### Praticar a Organização de Estilos Condicionais com Base em Resoluções de Tela

Com as variáveis de mídia definidas, podemos organizar estilos condicionais de forma eficiente, aplicando diferentes estilos para dispositivos móveis e tablets, por exemplo.

### Entender como a Ordem das Regras de Mídia Afeta a Aplicação dos Estilos no LESS

A ordem das regras de mídia no LESS afeta diretamente como os estilos são aplicados. Regras definidas posteriormente podem sobrescrever as anteriores se forem aplicáveis simultaneamente. Portanto, é importante organizar as regras de forma lógica e conforme a prioridade desejada.

### Exemplo Completo

Vamos criar um exemplo completo que inclui a definição de variáveis de mídia, uso de escaping e organização de estilos condicionais.

#### Estrutura de Pastas

```
src/
└── styles/
    ├── variaveis.less
    └── main.less
build/
└── styles/
    └── main.css
index.html
```

#### Arquivo LESS: `variaveis.less`

```less
@corDeFundo: #192a56;
@corDosBotoes: #0097e6;
@corDosTextos: #f5f6fa;
```

#### Arquivo LESS: `main.less`

```less
@import "variaveis.less";

@breakpointMobile: ~"(max-width: 767px)";
@breakpointTablet: ~"(min-width: 768px) and (max-width: 1023px)";

body {
  background-color: @corDeFundo;
  color: @corDosTextos;
}

.container {
  max-width: 960px;
  width: 100%;
  margin: 0 auto;

  @media @breakpointMobile {
    max-width: 70%;
    background-color: red;
  }
  @media @breakpointTablet {
    max-width: 80%;
    background-color: yellow;
  }
}
```

#### Compilar o LESS para CSS

No terminal, execute:

```bash
npm run less
```

#### Código HTML Utilizando o CSS Compilado

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Página do Lucelho</title>
  <link rel="stylesheet" href="build/styles/main.css">
</head>
<body>
  <header>
    <img src="https://via.placeholder.com/200x200" alt="Imagem de Placeholder">
    <h1>Página do Lucelho</h1>
    <h2>Desenvolvedor back-end</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui et esse amet iusto dolores nihil sapiente voluptate quae saepe voluptas, numquam omnis ea ratione accusamus, iste, sequi impedit necessitatibus. Ut!</p>
    <nav>
      <ul>
        <li><a href="">Instagram</a></li>
        <li><a href="">LinkedIn</a></li>
        <li><a href="">Github</a></li>
        <li><a href="">E-mail</a></li>
      </ul>
    </nav>
  </header>
  <div class="container">
    <button>Botão Padrão</button>
    <button class="sucesso">Botão Sucesso</button>
  </div>
</body>
</html>
```

### Resumo

Nesta aula, aprendemos sobre o conceito de "escaping" no LESS e como utilizá-lo para definir variáveis de mídia. Vimos como organizar estilos condicionais com base em resoluções de tela e entender a importância da ordem das regras de mídia. Com essas práticas, você pode criar estilos responsivos e bem estruturados para seus projetos web.