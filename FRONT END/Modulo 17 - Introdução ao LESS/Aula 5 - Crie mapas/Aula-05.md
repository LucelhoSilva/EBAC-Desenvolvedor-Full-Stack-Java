## 📝 Aula 05: Crie Mapas

### Compreender o que são os Mapas e como eles podem ser Usados para Agrupar Valores Relacionados

Mapas no LESS são coleções de pares chave-valor que permitem agrupar valores relacionados. Isso facilita a gestão e reutilização desses valores em todo o seu código CSS.

### Criar Mapas no LESS

Você pode definir mapas no LESS usando a sintaxe `#map()`, onde você especifica chaves e seus valores correspondentes. Isso ajuda a organizar suas propriedades CSS de forma estruturada.

### Exemplo de Criação e Uso de Mapas no LESS

#### Estrutura de Diretórios

```
src/
├── images/
│   ├── github.svg
│   ├── instagram.svg
│   ├── linkedin.svg
│   └── mail.svg
└── styles/
    ├── main.less
    └── mapas.less
```

#### Arquivo: `mapas.less`

```less
#colors() {
  background-color: #192a56;
  buttoncolor: #0097e6;
  textcolor: #f5f6fa;
}
```

#### Arquivo: `main.less`

```less
@import "mapas.less";

@breakpointMobile: ~"(max-width: 767px)";
@breakpointTablet: ~"(min-width: 768px) and (max-width: 1023px)";

.marginBottom8 {
  margin-bottom: 8px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}

body {
  background-color: #colors[background-color];
  color: #colors[textcolor];
}

.container {
  max-width: 960px;
  width: 100%;
  margin: 0 auto;

  @media @breakpointMobile {
    max-width: 70%;
  }
  @media @breakpointTablet {
    max-width: 80%;
  }
}

header {
  padding: 24px;

  .profile-avatar {
    display: block;
    margin: 0 auto 24px;
    border-radius: 50%;
  }
}

.profile-bio {
  text-align: center;

  &-name {
    font-size: 16px;
    .marginBottom8();
  }
  &-subtitle {
    font-size: 14px;
    .marginBottom8();
  }
  &-description {
    font-size: 14px;
    opacity: 0.7;
  }
}

.social-links {
  display: flex;
  justify-content: space-between;
  max-width: 240px;
  width: 100%;
  margin: 0 auto;

  li {
    list-style: none;

    img {
      transition: all ease 0.3s;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
}
```

### Acessar os Valores do Mapa

Você pode acessar os valores armazenados em um mapa usando a notação `#colors[chave]`, onde `chave` é o nome da propriedade que você deseja acessar.

### Aplicar Mapas em Estilos CSS

Mapas são especialmente úteis quando você tem um conjunto de valores relacionados que precisa aplicar em vários seletores. Eles ajudam a manter seu código DRY (Don't Repeat Yourself) e facilitam a atualização de valores relacionados em um único lugar.

### Boas Práticas para Organização de Código com Mapas

1. **Agrupar Valores Relacionados**: Use mapas para agrupar valores relacionados, como cores, tamanhos de fonte ou espaçamentos.
2. **Nomes Consistentes**: Use nomes consistentes e descritivos para as chaves dentro de seus mapas.
3. **Separação de Preocupações**: Mantenha seus mapas em arquivos separados se eles representarem preocupações diferentes (por exemplo, cores, tipografia, espaçamentos).
4. **Reutilização e Manutenção**: Utilize mapas para tornar seu código mais fácil de manter, atualizando valores em um único local.

### Resumo

Nesta aula, aprendemos sobre mapas no LESS, que permitem agrupar valores relacionados de forma estruturada. Criamos um mapa para armazenar valores de cores, acessamos esses valores em nossos estilos e discutimos boas práticas para organização de código com mapas. Usar mapas pode ajudar a manter seus estilos limpos, organizados e mais fáceis de manter.
