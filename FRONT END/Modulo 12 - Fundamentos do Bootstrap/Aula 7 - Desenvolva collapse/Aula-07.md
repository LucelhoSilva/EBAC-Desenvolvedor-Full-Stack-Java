## 📝 Aula 07: Desenvolva Collapse com Bootstrap

### ✅ Introdução ao Collapse no Bootstrap

O componente de colapso (collapse) no Bootstrap permite criar áreas de conteúdo que podem ser ocultadas ou mostradas com um clique. Isso é útil para economizar espaço na página e melhorar a experiência do usuário, permitindo que ele expanda ou colapse conteúdo conforme necessário.

### ✅ Estrutura Básica do Collapse

Para criar um elemento de colapso básico, você precisa de um botão ou link que acione o colapso e um contêiner que contenha o conteúdo colapsável.

#### Exemplo de Collapse Básico

```html
<button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
  Mostrar/Esconder Conteúdo
</button>
<div class="collapse" id="collapseExample">
  <div class="card card-body">Este é o conteúdo colapsável.</div>
</div>
```

### ✅ Colapsos Múltiplos

Você pode criar múltiplos colapsos na mesma página, cada um com seu próprio gatilho e conteúdo.

#### Exemplo de Colapsos Múltiplos

```html
<button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">Collapse 1</button>
<button class="btn btn-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Collapse 2</button>
<div class="collapse" id="collapseOne">
  <div class="card card-body">Este é o conteúdo do Collapse 1.</div>
</div>
<div class="collapse" id="collapseTwo">
  <div class="card card-body">Este é o conteúdo do Collapse 2.</div>
</div>
```

### ✅ Collapse em Grupos

Você pode agrupar vários elementos de colapso para criar uma experiência de usuário mais organizada, semelhante a um accordion. No entanto, diferente dos accordions, os colapsos em grupo não se fecham automaticamente quando outro é aberto.

#### Exemplo de Collapse em Grupo

```html
<div class="container">
  <p>
    <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseGroupOne" role="button" aria-expanded="false" aria-controls="collapseGroupOne"> Link com href </a>
    <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseGroupTwo" aria-expanded="false" aria-controls="collapseGroupTwo">
      Botão com data-target
    </button>
  </p>
  <div class="row">
    <div class="col">
      <div class="collapse multi-collapse" id="collapseGroupOne">
        <div class="card card-body">Este é o conteúdo do primeiro grupo de collapse.</div>
      </div>
    </div>
    <div class="col">
      <div class="collapse multi-collapse" id="collapseGroupTwo">
        <div class="card card-body">Este é o conteúdo do segundo grupo de collapse.</div>
      </div>
    </div>
  </div>
</div>
```

### ✅ Colapsos com Transições

O Bootstrap inclui transições suaves para colapsos, proporcionando uma melhor experiência visual. Essas transições são aplicadas automaticamente quando você usa as classes `.collapse` e os atributos `data-bs-toggle`.

#### Exemplo de Collapse com Transições

```html
<button class="btn btn-info" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTransition" aria-expanded="false" aria-controls="collapseTransition">
  Mostrar/Esconder com Transição
</button>
<div class="collapse" id="collapseTransition">
  <div class="card card-body">Conteúdo com transição suave.</div>
</div>
```

### ✅ Colapsos Aninhados

Você pode aninhar elementos de colapso dentro de outros colapsos para criar layouts mais complexos e organizados.

#### Exemplo de Colapsos Aninhados

```html
<button class="btn btn-warning" type="button" data-bs-toggle="collapse" data-bs-target="#parentCollapse" aria-expanded="false" aria-controls="parentCollapse">Collapse Pai</button>
<div class="collapse" id="parentCollapse">
  <div class="card card-body">
    Este é o conteúdo do colapso pai.
    <button class="btn btn-secondary mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#nestedCollapse" aria-expanded="false" aria-controls="nestedCollapse">
      Collapse Filho
    </button>
    <div class="collapse mt-2" id="nestedCollapse">
      <div class="card card-body">Este é o conteúdo do colapso filho.</div>
    </div>
  </div>
</div>
```

Com esses conceitos e exemplos, você pode desenvolver áreas colapsáveis estilizadas e funcionais utilizando as classes de utilitários do Bootstrap, melhorando a organização e a interatividade do seu projeto web.

<br>

[Material](./Desenvolva%20collapse.pdf)
