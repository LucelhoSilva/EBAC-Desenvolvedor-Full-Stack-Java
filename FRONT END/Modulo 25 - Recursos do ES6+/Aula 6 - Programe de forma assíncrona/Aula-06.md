## 📝 Aula 06: Programe de forma Assíncrona

### ✅ Introdução à Programação Assíncrona

Nesta aula, você vai entender os conceitos de programação assíncrona em JavaScript, que é fundamental para desenvolver aplicações eficientes e responsivas. A programação assíncrona permite que certas operações sejam executadas em paralelo, sem bloquear a execução do restante do código.

### ✅ Objetivos

- Compreender os conceitos de programação síncrona e assíncrona.
- Dominar o uso de **Promises** em JavaScript.
- Implementar programação assíncrona em situações reais.

### ✅ Diferença entre Programação Síncrona e Assíncrona

A programação **síncrona** é aquela onde as instruções são executadas uma após a outra, de forma sequencial. Isso pode causar lentidão em operações que demandam tempo, como requisições a servidores ou processamento de dados.

Por outro lado, a programação **assíncrona** permite que certas operações sejam iniciadas e continuadas em paralelo, enquanto o resto do código continua a ser executado. Isso melhora a performance e a responsividade da aplicação.

### ✅ Trabalhando com Promises

Uma **Promise** é um objeto que representa a eventual conclusão (ou falha) de uma operação assíncrona e seu valor resultante. As Promises têm três estados: pendente, cumprida e rejeitada.

#### Exemplo de Criação de uma Promise

```javascript
const funcaoMuitoPesadaPromisse = new Promise((resolve, reject) => {
  try {
    let execucoes = 0
    for (let i = 0; i < 1000000000; i++) {
      execucoes++
    }
    resolve(execucoes)
  } catch (e) {
    reject("Deu erro na iteração dos números")
  }
})
```

Nesse exemplo, criamos uma Promise que simula uma função muito pesada. Se a operação for bem-sucedida, ela resolve com o número de execuções; caso contrário, rejeita com um erro.

#### Utilizando a Promise

```javascript
console.log("inicio")
funcaoMuitoPesadaPromisse.then((result) => console.log(result)).catch((erro) => console.log(erro))
console.log("fim")
```

Aqui, utilizamos `.then()` para lidar com o resultado da Promise e `.catch()` para capturar qualquer erro.

### ✅ Função com Parâmetro usando Promises

Podemos também passar parâmetros para nossas Promises. Veja o exemplo abaixo:

```javascript
const promiseComParametro = (login, senha) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Logado com o usuário: ${login}`)
    }, 3000)
  })
}
```

Nesse caso, a função simula um login que leva 3 segundos para ser completado.

### ✅ Implementando Async e Await

O **async** e **await** são palavras-chave que tornam o código assíncrono mais legível, permitindo que você escreva código assíncrono como se fosse síncrono.

#### Exemplo de Uso

```javascript
async function execucaoPrincipal() {
  console.log("inicio")

  try {
    const resultado = await funcaoMuitoPesadaPromisse
    console.log(resultado)
  } catch (e) {
    console.log(e)
  }

  const loginResult = await promiseComParametro("bruno@gmail.com", 123456)
  console.log(loginResult)

  console.log("fim")
}

execucaoPrincipal()
```

Neste exemplo, a função `execucaoPrincipal` usa `await` para esperar a conclusão das Promises antes de continuar. Isso melhora a clareza do fluxo de execução.

### ✅ Conclusão

A programação assíncrona é essencial para o desenvolvimento moderno em JavaScript. Com o uso de Promises e a sintaxe `async/await`, você pode escrever código que é não apenas eficiente, mas também mais fácil de entender e manter. Aproveite essas técnicas para criar aplicações mais responsivas e robustas!
