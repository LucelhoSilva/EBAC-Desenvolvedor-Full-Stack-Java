## 📝 Aula 09: Desenvolva Formulários com Bootstrap

### ✅ Introdução aos Formulários no Bootstrap

Os formulários são elementos essenciais para a coleta de dados dos usuários. O Bootstrap fornece uma ampla variedade de classes e componentes para criar formulários de maneira rápida e estilizada, garantindo uma ótima experiência de usuário.

### ✅ Estrutura Básica de um Formulário

Um formulário básico no Bootstrap é composto por elementos como `<input>`, `<textarea>`, `<select>` e `<button>`, todos estilizados com classes específicas.

#### Exemplo de Formulário Básico

```html
<form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Endereço de email</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" class="form-text">Nós nunca compartilharemos seu email com ninguém.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Senha</label>
    <input type="password" class="form-control" id="exampleInputPassword1" />
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1">Lembrar-me</label>
  </div>
  <button type="submit" class="btn btn-primary">Enviar</button>
</form>
```

### ✅ Formulários Inline

Formulários inline exibem os campos de entrada em uma única linha, ideais para pesquisas rápidas ou campos de login.

#### Exemplo de Formulário Inline

```html
<form class="row gx-3 gy-2 align-items-center">
  <div class="col-auto">
    <label class="visually-hidden" for="inlineFormInput">Nome</label>
    <input type="text" class="form-control" id="inlineFormInput" placeholder="Jane Doe" />
  </div>
  <div class="col-auto">
    <label class="visually-hidden" for="inlineFormInputGroupUsername">Nome de usuário</label>
    <div class="input-group">
      <div class="input-group-text">@</div>
      <input type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="Usuário" />
    </div>
  </div>
  <div class="col-auto">
    <button type="submit" class="btn btn-primary">Enviar</button>
  </div>
</form>
```

### ✅ Campos de Formulário Customizados

O Bootstrap oferece diversas classes para customizar campos de formulário, como caixas de seleção, botões de rádio e selects.

#### Exemplo de Campos de Formulário Customizados

```html
<form>
  <div class="mb-3">
    <label for="customFile" class="form-label">Upload de Arquivo</label>
    <input class="form-control" type="file" id="customFile" />
  </div>
  <div class="mb-3">
    <label for="customRange" class="form-label">Range</label>
    <input type="range" class="form-range" id="customRange" />
  </div>
  <div class="mb-3">
    <label for="customSelect" class="form-label">Selecione</label>
    <select class="form-select" id="customSelect">
      <option selected>Escolha uma opção</option>
      <option value="1">Opção 1</option>
      <option value="2">Opção 2</option>
      <option value="3">Opção 3</option>
    </select>
  </div>
</form>
```

### ✅ Layouts de Formulário

O Bootstrap permite a criação de layouts de formulário responsivos e organizados usando o sistema de grid.

#### Exemplo de Layout de Formulário

```html
<form>
  <div class="row mb-3">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="inputEmail3" />
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Senha</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword3" />
    </div>
  </div>
  <fieldset class="row mb-3">
    <legend class="col-form-label col-sm-2 pt-0">Radios</legend>
    <div class="col-sm-10">
      <div class="form-check">
        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
        <label class="form-check-label" for="gridRadios1"> Primeiro radio </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
        <label class="form-check-label" for="gridRadios2"> Segundo radio </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" />
        <label class="form-check-label" for="gridRadios3"> Terceiro radio </label>
      </div>
    </div>
  </fieldset>
  <div class="row mb-3">
    <div class="col-sm-10 offset-sm-2">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="gridCheck1" />
        <label class="form-check-label" for="gridCheck1"> Exemplo de checkbox </label>
      </div>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Enviar</button>
</form>
```

### ✅ Validação de Formulários

O Bootstrap facilita a validação de formulários, aplicando estilos de feedback para campos válidos e inválidos.

#### Exemplo de Validação de Formulário

```html
<form class="needs-validation" novalidate>
  <div class="mb-3">
    <label for="validationCustom01" class="form-label">Primeiro Nome</label>
    <input type="text" class="form-control" id="validationCustom01" value="Mark" required />
    <div class="valid-feedback">Parece bom!</div>
  </div>
  <div class="mb-3">
    <label for="validationCustom02" class="form-label">Sobrenome</label>
    <input type="text" class="form-control" id="validationCustom02" value="Otto" required />
    <div class="valid-feedback">Parece bom!</div>
  </div>
  <div class="mb-3">
    <label for="validationCustomUsername" class="form-label">Nome de Usuário</label>
    <div class="input-group">
      <span class="input-group-text" id="inputGroupPrepend">@</span>
      <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
      <div class="invalid-feedback">Por favor, escolha um nome de usuário.</div>
    </div>
  </div>
  <div class="mb-3">
    <label for="validationCustom03" class="form-label">Cidade</label>
    <input type="text" class="form-control" id="validationCustom03" required />
    <div class="invalid-feedback">Por favor, forneça uma cidade válida.</div>
  </div>
  <div class="mb-3">
    <label for="validationCustom04" class="form-label">Estado</label>
    <select class="form-select" id="validationCustom04" required>
      <option selected disabled value="">Escolha...</option>
      <option>...</option>
    </select>
    <div class="invalid-feedback">Por favor, selecione um estado válido.</div>
  </div>
  <div class="mb-3">
    <label for="validationCustom05" class="form-label">CEP</label>
    <input type="text" class="form-control" id="validationCustom05" required />
    <div class="invalid-feedback">Por favor, forneça um CEP válido.</div>
  </div>
  <div class="mb-3 form-check">
    <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required />
    <label class="form-check-label" for="invalidCheck"> Concordo com os termos e condições </label>
    <div class="invalid-feedback">Você deve concordar antes de enviar.</div>
  </div>
  <button class="btn btn-primary" type="submit">Enviar</button>
</form>

<script>

  ários Bootstrap
      (function () {
          'use strict'
          var forms = document.querySelectorAll('.needs-validation')
          Array.prototype.slice.call(forms)
              .forEach(function (form) {
                  form.addEventListener('submit', function (event) {
                      if (!form.checkValidity()) {
                          event.preventDefault()
                          event.stopPropagation()
                      }
                      form.classList.add('was-validated')
                  }, false)
              })
      })()
</script>
```

Com esses conceitos e exemplos, você pode criar formulários esteticamente agradáveis e funcionalmente robustos utilizando as classes e componentes do Bootstrap, melhorando a experiência do usuário ao interagir com seus formulários.

<br>

[Material](./Desenvolva_formularios_com_bootstrap.pdf)
