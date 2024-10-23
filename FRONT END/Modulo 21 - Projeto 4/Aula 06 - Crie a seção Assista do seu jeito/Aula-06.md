# 📝 Aula 6: Crie a Seção "Assista do seu jeito"

## Objetivos

- Criar uma seção de conteúdo com imagem e texto;
- Aplicar estilos CSS para formatar a seção.

## Estrutura do Projeto

Nesta aula, vamos adicionar uma nova seção chamada "Assista do seu jeito" ao nosso site. Esta seção incluirá uma imagem e texto explicativo, estilizados conforme as diretrizes de design.

## Criando a Seção "Assista do seu jeito"

### Passo 1: Adicionando a Seção ao HTML

No arquivo `index.html`, adicionamos a nova seção:

```html
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Clone Disney+</title>
    <link rel="stylesheet" href="./dist/css/main.css" />
  </head>

  <body>
    <!-- Seções anteriores -->

    <!-- Seção Assista do seu jeito -->
    <section class="watch-anywhere">
      <img src="./dist/images/tv_pc_tablet_celular.png" alt="imagem com tv, pc, tablet e celular" />
      <div class="watch-anywhere__text-container">
        <h2 class="title">Assista do seu jeito</h2>
        <p class="text--big">
          Aproveite a tela grande da TV ou assista no tablet, laptop, celular e outros aparelhos. Nossa seleção de títulos em 4K não para de crescer. Além disso, para a felicidade
          de todos, é possível assistir em até 4 telas ao mesmo tempo.
        </p>
      </div>
    </section>
  </body>
</html>
```

### Passo 2: Estilizando a Seção com SCSS

Na pasta `styles`, criamos um arquivo chamado `_watch-anywhere.scss` para adicionar os estilos da seção "Assista do seu jeito":

```scss
@use "config/variables.scss";

.watch-anywhere {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2rem 5.6vw;
  background-color: variables.$bg-primary-color;
  color: variables.$text-second-color;

  img {
    max-width: 45%;
    height: auto;
    border-radius: 10px;
  }

  &__text-container {
    max-width: 45%;
    text-align: left;

    .title {
      @include variables.title(2.5rem);
      margin-bottom: 1rem;
    }

    .text--big {
      @include variables.text(1.25rem);
      line-height: 1.75rem;
    }
  }
}
```

### Passo 3: Importando os Estilos no `main.scss`

No arquivo `main.scss`, importamos os estilos da seção "Assista do seu jeito":

```scss
@use "./config/fonts";
@use "./config/variables";
@use "./config/mixins";

@use "./hero";
@use "./shows";
@use "./plans";
@use "./watch-anywhere";
```

### Passo 4: Controle de Versão com Git

Após adicionar a seção "Assista do seu jeito" e configurar os estilos, vamos commitar as mudanças no Git para manter o controle de versão:

```sh
git add .
git commit -m "Adiciona seção 'Assista do seu jeito' com estilos"
```

### Conclusão

Com esta configuração, aprendemos a criar uma seção de conteúdo com imagem e texto que permite aos usuários entender como podem assistir aos conteúdos da plataforma em diversos dispositivos.
