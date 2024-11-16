Ele fala que sobre o design atomic, aonde voce junta temos ## 📝 Aula 04: Conheça o Atomic Design

### ✅ Introdução

Nesta aula, aprendemos sobre o **Atomic Design**, um conceito que organiza a criação de interfaces de forma hierárquica e modular. O **Atomic Design** ajuda a estruturar os componentes de um projeto React, começando por elementos mais básicos e reutilizáveis (átomos), até chegar a componentes mais complexos e compostos (organismos). Esse conceito aumenta a flexibilidade e a escalabilidade de uma aplicação.

### ✅ Objetivos

- Conceituar o **Atomic Design** e entender sua aplicação no desenvolvimento de componentes.
- Criar componentes de acordo com a estrutura do **Atomic Design** (átomos, moléculas e organismos).
- Organizar um projeto React usando o **Atomic Design** para tornar o código mais modular e reutilizável.

### ✅ Estrutura do Atomic Design

O **Atomic Design** organiza os componentes em cinco níveis principais. Em projetos React, focamos em três desses níveis principais: átomos, moléculas e organismos.

1. **Átomos**: São os componentes mais básicos e indivisíveis, como botões, inputs, ícones, textos, etc.
2. **Moléculas**: São combinações de átomos que formam um bloco funcional, como um campo de formulário com um rótulo e um input.
3. **Organismos**: São componentes mais complexos formados pela combinação de átomos e moléculas, como um card de perfil ou uma barra de navegação.

### ✅ Exemplo Prático no Projeto

Para entender o funcionamento do **Atomic Design** na prática, vamos criar uma estrutura de pastas com átomos, moléculas e organismos.

#### Estrutura de Pastas

Abaixo, uma sugestão de estrutura de pastas para o projeto:

```
src
├── components
│   ├── atoms
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   └── Label.tsx
│   ├── molecules
│   │   └── FormField.tsx
│   └── organisms
│       └── SignInForm.tsx
└── App.tsx
```

### ✅ Exemplo de Código

#### 1. Átomo: Botão (`Button.tsx`)

Este é um componente básico e reutilizável de botão.

```tsx
// src/components/atoms/Button.tsx

import styled from "styled-components"

type ButtonProps = {
  children: React.ReactNode
  onClick: () => void
}

const StyledButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>
}

export default Button
```

#### 2. Átomo: Input (`Input.tsx`)

Um campo de input básico que será reutilizado em moléculas e organismos.

```tsx
// src/components/atoms/Input.tsx

import styled from "styled-components"

type InputProps = {
  type: string
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const StyledInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
`

const Input: React.FC<InputProps> = ({ type, placeholder, value, onChange }) => {
  return <StyledInput type={type} placeholder={placeholder} value={value} onChange={onChange} />
}

export default Input
```

#### 3. Molécula: Campo de Formulário (`FormField.tsx`)

Esta molécula combina um `Label` e um `Input` para criar um campo de formulário completo.

```tsx
// src/components/molecules/FormField.tsx

import styled from "styled-components"
import Label from "../atoms/Label"
import Input from "../atoms/Input"

type FormFieldProps = {
  label: string
  type: string
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const FieldWrapper = styled.div`
  margin-bottom: 16px;
`

const FormField: React.FC<FormFieldProps> = ({ label, type, placeholder, value, onChange }) => {
  return (
    <FieldWrapper>
      <Label>{label}</Label>
      <Input type={type} placeholder={placeholder} value={value} onChange={onChange} />
    </FieldWrapper>
  )
}

export default FormField
```

#### 4. Organismo: Formulário de Login (`SignInForm.tsx`)

Este organismo combina diversos átomos e moléculas para criar um formulário de login completo.

```tsx
// src/components/organisms/SignInForm.tsx

import { useState } from "react"
import FormField from "../molecules/FormField"
import Button from "../atoms/Button"

const SignInForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = () => {
    alert(`Email: ${email}, Senha: ${password}`)
  }

  return (
    <form>
      <FormField
        label="Email"
        type="email"
        placeholder="Digite seu email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <FormField
        label="Senha"
        type="password"
        placeholder="Digite sua senha"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <Button onClick={handleSubmit}>Entrar</Button>
    </form>
  )
}

export default SignInForm
```

### ✅ Utilizando o Formulário de Login no `App.tsx`

Agora podemos utilizar o organismo `SignInForm` diretamente no `App.tsx`.

```tsx
// src/App.tsx

import SignInForm from "./components/organisms/SignInForm"

function App() {
  return (
    <div>
      <h1>Bem-vindo</h1>
      <SignInForm />
    </div>
  )
}

export default App
```

### ✅ Conclusão

Nesta aula, aprendemos a:

- Aplicar o **Atomic Design** para estruturar componentes em um projeto React.
- Criar componentes reutilizáveis, organizados em átomos, moléculas e organismos.
- Usar a estrutura modular para criar interfaces flexíveis e escaláveis.

Essas práticas tornam o projeto mais organizado e facilitam a manutenção e reutilização de componentes, especialmente em projetos grandes.
