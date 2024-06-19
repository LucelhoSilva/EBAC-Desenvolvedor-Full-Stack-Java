## 📝 Aula 05: Desenvolva Botões com Bootstrap

### ✅ Introdução aos Botões no Bootstrap

O Bootstrap oferece uma ampla variedade de estilos e tamanhos de botões, além de várias opções de customização. Utilizando classes predefinidas, você pode criar botões que se integram harmoniosamente ao design do seu site e são responsivos a diferentes dispositivos.

### ✅ Botões Básicos

Para criar um botão básico, utilize a classe `.btn` junto com uma das classes de contexto de botões como `.btn-primary`, `.btn-secondary`, `.btn-success`, `.btn-danger`, `.btn-warning`, `.btn-info`, `.btn-light`, e `.btn-dark`.

#### Exemplo de Botões Básicos

```html
<button type="button" class="btn btn-primary">Botão Primário</button>
<button type="button" class="btn btn-secondary">Botão Secundário</button>
<button type="button" class="btn btn-success">Botão Sucesso</button>
<button type="button" class="btn btn-danger">Botão Perigo</button>
<button type="button" class="btn btn-warning">Botão Alerta</button>
<button type="button" class="btn btn-info">Botão Informação</button>
<button type="button" class="btn btn-light">Botão Claro</button>
<button type="button" class="btn btn-dark">Botão Escuro</button>
```

### ✅ Tamanhos de Botões

O Bootstrap permite ajustar o tamanho dos botões usando classes adicionais. Utilize `.btn-lg` para botões grandes, `.btn-sm` para botões pequenos, e `.btn-block` para botões que ocupam toda a largura do contêiner.

#### Exemplo de Tamanhos de Botões

```html
<button type="button" class="btn btn-primary btn-lg">Botão Grande</button>
<button type="button" class="btn btn-secondary btn-sm">Botão Pequeno</button>
<button type="button" class="btn btn-success btn-block">Botão Bloco</button>
```

### ✅ Botões Ativos e Desabilitados

Para indicar um botão ativo, utilize a classe `.active`. Para desabilitar um botão, utilize o atributo `disabled` ou a classe `.disabled`.

#### Exemplo de Botões Ativos e Desabilitados

```html
<button type="button" class="btn btn-primary active">Botão Ativo</button>
<button type="button" class="btn btn-secondary" disabled>Botão Desabilitado</button>
<button type="button" class="btn btn-secondary disabled">Botão Desabilitado (Classe)</button>
```

### ✅ Botões com Ícones

Você pode adicionar ícones aos botões utilizando bibliotecas de ícones como Font Awesome ou Bootstrap Icons.

#### Exemplo de Botões com Ícones (usando Font Awesome)

```html
<button type="button" class="btn btn-primary"><i class="fas fa-check"></i> Botão com Ícone</button>
<button type="button" class="btn btn-danger"><i class="fas fa-times"></i> Botão com Ícone</button>
```

### ✅ Grupos de Botões

O Bootstrap permite agrupar botões usando classes de grupo de botões como `.btn-group` para criar um conjunto de botões alinhados horizontalmente.

#### Exemplo de Grupos de Botões

```html
<div class="btn-group" role="group">
  <button type="button" class="btn btn-primary">Esquerda</button>
  <button type="button" class="btn btn-secondary">Meio</button>
  <button type="button" class="btn btn-primary">Direita</button>
</div>
```

### ✅ Botões de Dropdown

Você pode criar botões de dropdown (menu suspenso) utilizando as classes do Bootstrap para dropdowns.

#### Exemplo de Botões de Dropdown

```html
<div class="btn-group">
  <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Ação</a>
    <a class="dropdown-item" href="#">Outra ação</a>
    <a class="dropdown-item" href="#">Algo mais aqui</a>
  </div>
</div>
```

Com esses conceitos e exemplos, você pode desenvolver uma variedade de botões estilizados e funcionais utilizando as classes de utilitários do Bootstrap, aprimorando a interatividade e a estética do seu projeto web.

<br>

[Material](./Desenvolva%20botões.pdf)
