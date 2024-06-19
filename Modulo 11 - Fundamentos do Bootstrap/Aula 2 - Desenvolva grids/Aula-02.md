## 📝 Aula 02: Desenvolva Grids com Bootstrap

### ✅ Introdução ao Sistema de Grid do Bootstrap

O sistema de grid do Bootstrap é uma ferramenta poderosa para criar layouts responsivos. Ele é baseado em uma estrutura de 12 colunas que se adapta automaticamente ao tamanho da tela do dispositivo, permitindo que você crie layouts complexos de forma simples e eficiente.

### ✅ Estrutura Básica do Sistema de Grid

O sistema de grid do Bootstrap utiliza uma série de classes para especificar o layout das colunas em diferentes tamanhos de tela. A estrutura básica consiste em três componentes principais:

1. **Container**: Um elemento que envolve todo o conteúdo e define a largura máxima do layout.
2. **Row**: Um contêiner flexível que agrupa colunas.
3. **Coluna**: As colunas dentro de uma linha, onde o conteúdo é colocado.

#### Exemplo de Estrutura Básica

```html
<div class="container">
  <div class="row">
    <div class="col">Coluna 1</div>
    <div class="col">Coluna 2</div>
    <div class="col">Coluna 3</div>
  </div>
</div>
```

### ✅ Classes de Colunas

O Bootstrap oferece uma variedade de classes para definir a largura das colunas em diferentes tamanhos de tela. As classes são formadas pelo prefixo `.col-`, seguido de um sufixo que especifica o tamanho da tela:

- `.col-`: Para todos os tamanhos de tela.
- `.col-sm-`: Para telas pequenas (≥576px).
- `.col-md-`: Para telas médias (≥768px).
- `.col-lg-`: Para telas grandes (≥992px).
- `.col-xl-`: Para telas extragrandes (≥1200px).

#### Exemplo de Colunas Responsivas

```html
<div class="container">
  <div class="row">
    <div class="col-md-4">Coluna 1</div>
    <div class="col-md-4">Coluna 2</div>
    <div class="col-md-4">Coluna 3</div>
  </div>
</div>
```

### ✅ Colunas de Diferentes Larguras

Você pode definir larguras específicas para as colunas, somando um total de 12 colunas por linha.

#### Exemplo de Colunas com Larguras Específicas

```html
<div class="container">
  <div class="row">
    <div class="col-md-6">Coluna de 6 Colunas</div>
    <div class="col-md-3">Coluna de 3 Colunas</div>
    <div class="col-md-3">Coluna de 3 Colunas</div>
  </div>
</div>
```

### ✅ Aninhamento de Colunas

O Bootstrap permite aninhar colunas dentro de outras colunas para criar layouts mais complexos.

#### Exemplo de Colunas Aninhadas

```html
<div class="container">
  <div class="row">
    <div class="col-md-8">
      Coluna de 8 Colunas
      <div class="row">
        <div class="col-md-6">Coluna de 6 Colunas</div>
        <div class="col-md-6">Coluna de 6 Colunas</div>
      </div>
    </div>
    <div class="col-md-4">Coluna de 4 Colunas</div>
  </div>
</div>
```

### ✅ Offset e Reordenamento de Colunas

O Bootstrap permite adicionar deslocamento (offset) às colunas e reordenar colunas em diferentes tamanhos de tela usando classes específicas.

#### Exemplo de Offset

```html
<div class="container">
  <div class="row">
    <div class="col-md-4 offset-md-4">Coluna Centralizada</div>
  </div>
</div>
```

#### Exemplo de Reordenamento

```html
<div class="container">
  <div class="row">
    <div class="col-md-4 order-md-2">Segunda Coluna</div>
    <div class="col-md-4 order-md-1">Primeira Coluna</div>
    <div class="col-md-4 order-md-3">Terceira Coluna</div>
  </div>
</div>
```

Com esses conceitos e exemplos, você pode começar a desenvolver grids responsivos e flexíveis usando o Bootstrap, tornando o processo de criação de layouts complexos mais simples e eficiente.

[Material](./Desenvolva%20grids.pdf)
