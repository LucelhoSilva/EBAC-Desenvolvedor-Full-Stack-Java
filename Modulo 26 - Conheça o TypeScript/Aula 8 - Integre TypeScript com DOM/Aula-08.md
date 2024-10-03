## 📝 Aula 08: Integre TypeScript com DOM

### ✅ Introdução

Nesta aula, você aprenderá como o **TypeScript** pode ser integrado com o **DOM** (Document Object Model). O TypeScript fornece ferramentas que tornam a manipulação de elementos do DOM mais segura e com menos erros, utilizando a tipagem estática para garantir que os tipos dos elementos sejam respeitados.

### ✅ Objetivos

- Compreender como o **TypeScript** se integra com o **DOM**.
- Aplicar **tipos** e **interfaces** para manipular elementos do DOM.
- Utilizar comentários e dicas para documentar o código TypeScript.

### ✅ Manipulação do DOM com TypeScript

No **JavaScript**, o DOM é frequentemente manipulado diretamente, mas isso pode gerar problemas, como tentar acessar métodos ou propriedades de um elemento que não existe. O **TypeScript** ajuda a evitar esses erros ao utilizar a tipagem estática para validar o tipo de cada elemento.

#### Selecionando Elementos do DOM

No exemplo abaixo, selecionamos um campo de texto (`input`), um formulário e um botão no DOM usando `getElementById` e `getElementsByTagName`.

```typescript
const campoNome = document.getElementById('nome');
const formulario = document.getElementsByTagName('form');
const botaoEnviar = document.getElementById('btn-enviar');
```

### ✅ Tratando Elementos Nulos

O TypeScript força você a lidar com a possibilidade de o elemento ser `null` (quando não existe no DOM), o que ajuda a evitar erros em tempo de execução.

#### Exemplo com Operador de Encadeamento Opcional (`?.`)

Utilizamos o operador de **encadeamento opcional** (`?.`) para garantir que, se o botão não for encontrado no DOM, o código não tentará adicionar um evento a `null`, evitando erros.

```typescript
botaoEnviar?.addEventListener('click', (e: MouseEvent) => {
  // Lógica do evento de clique
});
```

Neste caso:
- Se o `botaoEnviar` for `null`, o código não tentará registrar o evento de clique, evitando um erro.
- O evento de clique (`click`) é tipado como `MouseEvent`, o que garante que estamos lidando corretamente com o tipo de evento esperado.

### ✅ Tipando Elementos do DOM

O **TypeScript** permite que você declare o tipo de elementos do DOM explicitamente. Isso ajuda a garantir que os métodos e propriedades usados são válidos para o tipo de elemento que você está manipulando.

#### Tipando um Elemento `HTMLInputElement`

Se você sabe que o elemento obtido via `getElementById` é um campo de texto (`input`), pode explicitamente definir seu tipo como `HTMLInputElement`:

```typescript
const campoNome = document.getElementById('nome') as HTMLInputElement;

if (campoNome) {
  campoNome.value = "Digite seu nome";  // Manipulando o valor do input
}
```

Ao fazer isso, o TypeScript permite acessar todas as propriedades e métodos específicos de um `input`, como `value`, sem levantar erros de compilação.

### ✅ Trabalhando com Formulários

Podemos manipular formulários e seus elementos de forma mais segura com o TypeScript.

```typescript
const formulario = document.getElementsByTagName('form')[0];

formulario?.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  console.log("Formulário enviado");
});
```

Aqui, adicionamos um evento `submit` ao formulário, tipando o evento como `Event` para garantir que o manipulador seja executado de forma correta.

### ✅ Conclusão

A integração entre **TypeScript** e **DOM** traz mais segurança e previsibilidade ao código, evitando erros comuns que ocorrem durante a manipulação de elementos. A tipagem estática torna o código mais robusto e fácil de manter, permitindo uma interação segura com os elementos da interface. Ao aprender a aplicar tipos no DOM, você melhora significativamente a qualidade e a segurança de suas aplicações.