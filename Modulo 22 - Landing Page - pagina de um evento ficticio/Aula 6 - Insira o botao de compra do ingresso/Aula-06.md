# 📝 Aula 6: Insira o Botão de Compra de Ingressos e o Temporizador de Contagem Regressiva

## Objetivos
- Compreender o uso da função `getTime` para trabalhar com datas.
- Aplicar as funções `setInterval` e `clearInterval` para criar um temporizador de contagem regressiva.
- Integrar um temporizador funcional na landing page.

## Implementação

### 1. Temporizador de Contagem Regressiva
Criamos um temporizador de contagem regressiva que conta até a data do evento usando JavaScript.

#### Código JavaScript
No arquivo `main.js`, o seguinte código foi adicionado:

```javascript
const contador = document.getElementById('contador');
const dataDoEvento = new Date('Sep 28, 2024 19:00:00');
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(() => {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;
    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000);

    contador.innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

    if(diasAteOEvento < 0) {
        clearInterval(contaAsHoras);
        contador.innerHTML = "Evento expirado";
    }
}, 1000);
```

#### Integração no HTML
Adicione o seguinte HTML onde deseja que o temporizador de contagem regressiva apareça:

```html
<span id="contador"></span>
```

### 2. Animações Aprimoradas
Para melhorar os efeitos visuais dos elementos, adicionamos os seguintes atributos aos elementos HTML:

```html
data-aos-duration="1000" data-aos-easing="ease-in-sine"
```

## Recursos
Usamos a biblioteca AOS (Animate On Scroll) para adicionar animações:
- [Documentação AOS](https://michalsnik.github.io/aos/)