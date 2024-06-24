## 📝 Aula 08: Desenvolva Alertas com Bootstrap

### ✅ Introdução aos Alertas no Bootstrap

Os alertas são componentes úteis para fornecer feedback contextual a usuários sobre ações e eventos no site. O Bootstrap oferece uma variedade de classes para criar alertas de diferentes tipos, como sucesso, erro, aviso e informação.

### ✅ Estrutura Básica dos Alertas

Os alertas são criados utilizando a classe `.alert`, junto com classes adicionais para especificar o tipo de alerta.

#### Exemplo de Alerta Básico

```html
<div class="alert alert-primary" role="alert">Este é um alerta primário—verifique-o!</div>
<div class="alert alert-secondary" role="alert">Este é um alerta secundário—verifique-o!</div>
<div class="alert alert-success" role="alert">Este é um alerta de sucesso—verifique-o!</div>
<div class="alert alert-danger" role="alert">Este é um alerta de perigo—verifique-o!</div>
<div class="alert alert-warning" role="alert">Este é um alerta de aviso—verifique-o!</div>
<div class="alert alert-info" role="alert">Este é um alerta informativo—verifique-o!</div>
<div class="alert alert-light" role="alert">Este é um alerta claro—verifique-o!</div>
<div class="alert alert-dark" role="alert">Este é um alerta escuro—verifique-o!</div>
```

### ✅ Alertas com Links

Você pode incluir links dentro dos alertas usando a classe `.alert-link` para estilizar os links de forma adequada ao contexto do alerta.

#### Exemplo de Alerta com Links

```html
<div class="alert alert-success" role="alert">Este é um alerta de sucesso com um <a href="#" class="alert-link">link de exemplo</a>. Clique para ver mais detalhes.</div>
```

### ✅ Alertas com Botões de Fechamento

Para tornar os alertas dispensáveis, adicione um botão de fechamento com a classe `.btn-close` e atributos `data-bs-dismiss="alert"`.

#### Exemplo de Alerta com Botão de Fechamento

```html
<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Aviso!</strong> Este é um alerta com um botão de fechamento.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
```

### ✅ Alertas com Ícones

Você pode adicionar ícones aos alertas para melhorar a visibilidade e a compreensão usando bibliotecas como Font Awesome ou Bootstrap Icons.

#### Exemplo de Alerta com Ícone (usando Font Awesome)

```html
<div class="alert alert-danger" role="alert"><i class="fas fa-exclamation-triangle"></i> Este é um alerta de perigo com um ícone.</div>
```

### ✅ Alertas Aninhados

Você pode aninhar alertas dentro de outros elementos, como cards ou colunas, para criar layouts mais organizados.

#### Exemplo de Alertas Aninhados

```html
<div class="card">
  <div class="card-body">
    <h5 class="card-title">Título do Card</h5>
    <p class="card-text">Texto do card com um alerta aninhado abaixo.</p>
    <div class="alert alert-info" role="alert">Este é um alerta informativo dentro de um card.</div>
  </div>
</div>
```

### ✅ Alertas com Cores Personalizadas

Você pode personalizar as cores dos alertas usando classes utilitárias de cor do Bootstrap ou adicionando estilos CSS personalizados.

#### Exemplo de Alertas com Cores Personalizadas

```html
<div class="alert" style="background-color: #f0ad4e; color: white;" role="alert">Este é um alerta personalizado.</div>
```

Com esses conceitos e exemplos, você pode desenvolver alertas estilizados e funcionais utilizando as classes de utilitários do Bootstrap, aprimorando a comunicação de informações importantes e feedback para os usuários no seu projeto web.

<br>

[Material](./Desenvolva_alertas_com_bootstrap.pdf)
