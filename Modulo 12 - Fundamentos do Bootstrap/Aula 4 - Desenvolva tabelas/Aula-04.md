## 📝 Aula 04: Desenvolva Tabelas com Bootstrap

### ✅ Introdução às Tabelas no Bootstrap

O Bootstrap fornece uma série de classes para estilizar tabelas de forma rápida e consistente. Utilizar essas classes permite criar tabelas responsivas, elegantes e funcionais sem a necessidade de escrever CSS adicional.

### ✅ Tabelas Básicas

Para criar uma tabela básica estilizada com Bootstrap, basta adicionar a classe `.table` ao elemento `<table>`.

#### Exemplo de Tabela Básica

```html
<table class="table">
  <thead>
    <tr>
      <th>#</th>
      <th>Nome</th>
      <th>Idade</th>
      <th>Cidade</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>João</td>
      <td>30</td>
      <td>São Paulo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Maria</td>
      <td>25</td>
      <td>Rio de Janeiro</td>
    </tr>
  </tbody>
</table>
```

### ✅ Tabelas Estripeadas

Para adicionar um efeito de listras nas linhas da tabela, utilize a classe `.table-striped`.

#### Exemplo de Tabela Estripeada

```html
<table class="table table-striped">
  <thead>
    <tr>
      <th>#</th>
      <th>Nome</th>
      <th>Idade</th>
      <th>Cidade</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>João</td>
      <td>30</td>
      <td>São Paulo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Maria</td>
      <td>25</td>
      <td>Rio de Janeiro</td>
    </tr>
  </tbody>
</table>
```

### ✅ Tabelas com Linhas Hoveáveis

Para adicionar um efeito de destaque nas linhas ao passar o mouse sobre elas, utilize a classe `.table-hover`.

#### Exemplo de Tabela com Linhas Hoveáveis

```html
<table class="table table-hover">
  <thead>
    <tr>
      <th>#</th>
      <th>Nome</th>
      <th>Idade</th>
      <th>Cidade</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>João</td>
      <td>30</td>
      <td>São Paulo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Maria</td>
      <td>25</td>
      <td>Rio de Janeiro</td>
    </tr>
  </tbody>
</table>
```

### ✅ Tabelas com Bordas

Para adicionar bordas a todas as células da tabela, utilize a classe `.table-bordered`.

#### Exemplo de Tabela com Bordas

```html
<table class="table table-bordered">
  <thead>
    <tr>
      <th>#</th>
      <th>Nome</th>
      <th>Idade</th>
      <th>Cidade</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>João</td>
      <td>30</td>
      <td>São Paulo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Maria</td>
      <td>25</td>
      <td>Rio de Janeiro</td>
    </tr>
  </tbody>
</table>
```

### ✅ Tabelas com Cores de Fundo

Para adicionar uma cor de fundo às linhas ou células da tabela, utilize as classes de contexto como `.table-primary`, `.table-secondary`, `.table-success`, `.table-danger`, `.table-warning`, `.table-info`, `.table-light`, e `.table-dark`.

#### Exemplo de Tabela com Cores de Fundo

```html
<table class="table">
  <thead class="table-dark">
    <tr>
      <th>#</th>
      <th>Nome</th>
      <th>Idade</th>
      <th>Cidade</th>
    </tr>
  </thead>
  <tbody>
    <tr class="table-primary">
      <td>1</td>
      <td>João</td>
      <td>30</td>
      <td>São Paulo</td>
    </tr>
    <tr class="table-success">
      <td>2</td>
      <td>Maria</td>
      <td>25</td>
      <td>Rio de Janeiro</td>
    </tr>
  </tbody>
</table>
```

### ✅ Tabelas Responsivas

Para tornar a tabela responsiva e permitir que ela se adapte a diferentes tamanhos de tela, utilize a classe `.table-responsive`.

#### Exemplo de Tabela Responsiva

```html
<div class="table-responsive">
  <table class="table">
    <thead>
      <tr>
        <th>#</th>
        <th>Nome</th>
        <th>Idade</th>
        <th>Cidade</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>João</td>
        <td>30</td>
        <td>São Paulo</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Maria</td>
        <td>25</td>
        <td>Rio de Janeiro</td>
      </tr>
    </tbody>
  </table>
</div>
```

Com esses conceitos e exemplos, você pode desenvolver tabelas elegantes, funcionais e responsivas utilizando as classes de utilitários do Bootstrap, melhorando a apresentação e usabilidade das suas tabelas em projetos web.

<br>

[Material](./Desenvolva_tabelas_com_bootstrap.pdf)
