## 📝 Aula 06: Desenvolva Accordions com Bootstrap

### ✅ Introdução aos Accordions no Bootstrap

Os accordions são elementos interativos que permitem esconder e mostrar conteúdo com cliques, organizando a informação de maneira clara e acessível. O Bootstrap facilita a criação de accordions com suas classes e componentes de colapso (collapse).

### ✅ Estrutura Básica dos Accordions

Para criar um accordion básico, utilize o componente de colapso (collapse) do Bootstrap junto com classes específicas para cabeçalhos e conteúdo.

#### Exemplo de Accordion Básico

```html
<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">Conteúdo do Accordion Item #1.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">Conteúdo do Accordion Item #2.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">Conteúdo do Accordion Item #3.</div>
    </div>
  </div>
</div>
```

### ✅ Personalização de Accordions

Você pode personalizar os accordions alterando estilos, cores e comportamento utilizando classes do Bootstrap e estilos CSS adicionais.

#### Exemplo de Accordion Personalizado

```html
<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button bg-primary text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">Conteúdo do Accordion Item #1.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button
        class="accordion-button bg-success text-white collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseTwo"
        aria-expanded="false"
        aria-controls="collapseTwo"
      >
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">Conteúdo do Accordion Item #2.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button
        class="accordion-button bg-warning text-dark collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseThree"
        aria-expanded="false"
        aria-controls="collapseThree"
      >
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">Conteúdo do Accordion Item #3.</div>
    </div>
  </div>
</div>
```

### ✅ Accordions Aninhados

Você pode aninhar accordions dentro de outros accordions para criar layouts mais complexos.

#### Exemplo de Accordions Aninhados

```html
<div class="accordion" id="accordionParent">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingParentOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseParentOne" aria-expanded="true" aria-controls="collapseParentOne">
        Accordion Principal #1
      </button>
    </h2>
    <div id="collapseParentOne" class="accordion-collapse collapse show" aria-labelledby="headingParentOne" data-bs-parent="#accordionParent">
      <div class="accordion-body">
        <div class="accordion" id="accordionChild">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingChildOne">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseChildOne" aria-expanded="true" aria-controls="collapseChildOne">
                Accordion Aninhado #1
              </button>
            </h2>
            <div id="collapseChildOne" class="accordion-collapse collapse show" aria-labelledby="headingChildOne" data-bs-parent="#accordionChild">
              <div class="accordion-body">Conteúdo do Accordion Aninhado #1.</div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingChildTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseChildTwo"
                aria-expanded="false"
                aria-controls="collapseChildTwo"
              >
                Accordion Aninhado #2
              </button>
            </h2>
            <div id="collapseChildTwo" class="accordion-collapse collapse" aria-labelledby="headingChildTwo" data-bs-parent="#accordionChild">
              <div class="accordion-body">Conteúdo do Accordion Aninhado #2.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

### ✅ Accordions com Ícones

Você pode adicionar ícones aos cabeçalhos dos accordions utilizando bibliotecas de ícones como Font Awesome ou Bootstrap Icons para melhorar a usabilidade.

#### Exemplo de Accordions com Ícones (usando Font Awesome)

```html
<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <i class="fas fa-chevron-down"></i> Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">Conteúdo do Accordion Item #1.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <i class="fas fa-chevron-down"></i> Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">Conteúdo do Accordion Item #2.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <i class="fas fa-chevron-down"></i> Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">Conteúdo do Accordion Item #3.</div>
    </div>
  </div>
</div>
```

Com esses conceitos e exemplos, você pode desenvolver accordions estilizados e funcionais utilizando as classes de utilitários do Bootstrap, aprimorando a organização e a usabilidade do conteúdo em seu projeto web.

<br>

[Material](./Desenvolva%20accordions.pdf)
