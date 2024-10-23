## 📝 Aula 02: Analise os Tipos Básicos

### ✅ Introdução aos Tipos Básicos no TypeScript

Nesta aula, exploraremos os **tipos básicos** no TypeScript e como eles podem ser utilizados para melhorar a segurança e a legibilidade do código. Entender e usar corretamente os tipos básicos é essencial para tirar o máximo proveito do TypeScript.

### ✅ Objetivos

- Compreender os **tipos básicos** do TypeScript.
- Dominar a **declaração de tipos personalizados**.
- Explorar o uso de tipos mais flexíveis, como o tipo **any**.

### ✅ Tipos Básicos no TypeScript

No TypeScript, você pode definir explicitamente o tipo de uma variável, o que ajuda a garantir que ela será usada corretamente em diferentes partes do código. Isso melhora a detecção de erros em tempo de compilação e torna o código mais robusto.

#### Exemplo de Tipos Básicos:

```typescript
let estaChovendo: boolean = false
estaChovendo = true // booleano

let idade: number = 27 // número
let altura: number = 1.75 // número decimal

const nacionalidade: string = "brasileiro" // string
```

Aqui, as variáveis `estaChovendo`, `idade`, `altura` e `nacionalidade` são explicitamente tipadas como **boolean**, **number** e **string**.

### ✅ Arrays no TypeScript

Em TypeScript, você pode tipar arrays de duas formas: usando colchetes (`[]`) ou a sintaxe `Array<tipo>`.

#### Exemplo de Arrays:

```typescript
const colegas: string[] = ["Matheus", "Denis", "João"] // Array de strings
const tecnologias: Array<string> = ["JavaScript", "TypeScript", "NodeJS"] // Outra forma de declarar um array de strings

const notas: ReadonlyArray<number> = [10, 9, 8, 7] // ReadonlyArray não permite modificações
```

- **ReadonlyArray**: Garante que o array não possa ser modificado (não permite operações como `push` ou `pop`).

### ✅ Tuplas no TypeScript

**Tuplas** permitem que você declare um array com uma quantidade fixa de elementos, cada um com seu próprio tipo.

#### Exemplo de Tupla:

```typescript
const lista: [nome: string, estaEstudando: boolean, idade: number] = ["Lucelho", true, 28]
```

Neste exemplo, `lista` deve conter três elementos: uma **string**, um **boolean** e um **número**, nessa ordem.

### ✅ Union Types

Com **Union Types**, uma variável pode aceitar mais de um tipo. Isso é útil quando você precisa de flexibilidade com os tipos de dados que uma variável pode conter.

#### Exemplo de Union Types:

```typescript
let idadeDoLucelho: number | string = 25 // Pode ser número ou string
idadeDoLucelho = "vinte e cinco"
```

Aqui, `idadeDoLucelho` pode ser tanto um **número** quanto uma **string**. Isso permite que a variável seja usada de forma mais flexível, sem sacrificar a tipagem.

### ✅ Tipo Any

O **tipo `any`** pode ser usado quando não há necessidade de restringir o tipo de uma variável, ou quando o tipo é desconhecido durante a compilação. No entanto, o uso de `any` deve ser evitado, pois ele desativa as verificações de tipo, o que pode resultar em erros mais difíceis de detectar.

#### Exemplo de Uso do Tipo Any:

```typescript
let dadosDaApi: any // Tipo flexível (não recomendado)
dadosDaApi = 10
dadosDaApi = "dez"
dadosDaApi = true
dadosDaApi = [10, "dez", true]
```

Aqui, a variável `dadosDaApi` pode conter qualquer valor: números, strings, booleanos ou até arrays mistos. Embora `any` ofereça flexibilidade, ele reduz a segurança do código.

### ✅ Conclusão

O TypeScript oferece uma ampla variedade de tipos que ajudam a melhorar a robustez e a legibilidade do código. Ao entender os **tipos básicos**, **arrays**, **tuplas**, **union types** e o uso do **any**, você poderá escrever código mais confiável e evitar muitos erros comuns. Apesar da flexibilidade oferecida pelo `any`, é importante utilizá-lo com cautela e, sempre que possível, preferir tipos mais específicos.

Com essa base sobre os tipos básicos, você está pronto para explorar mais profundamente as funcionalidades do TypeScript e continuar aprimorando suas habilidades!
