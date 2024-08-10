# 📝 Aula 1: Explore a Comunicação entre Front-End e Back-End

### Objetivos
- Conceituar e entender a estrutura de URL;
- Definir e compreender a estrutura de HTTP;
- Compreender os conceitos fundamentais da comunicação entre o Front-End e o Back-End;
- Familiarizar-se com os métodos HTTP.

### Conteúdos Abordados

#### 1. URL - Uniform Resource Locator
Nesta aula, você aprendeu sobre a estrutura de uma URL, que é um localizador de recursos na web. A URL é composta por diferentes partes, incluindo o domínio e os parâmetros de consulta (query parameters).

**Exemplo de URL:**
```
https://meusite.com.br/produtos?marca=nike&tamanho=39
```
- `https://meusite.com.br` -> Base URL (domínio)
- `/produtos?` -> Recurso
- `marca=nike&tamanho=39` -> Parâmetros de consulta (query parameters)

Além disso, um site pode conter subdomínios, que são usados para diferenciar seções ou funcionalidades específicas do site.

**Exemplo de Subdomínio:**
```
https://admin.meusite.com.br
```
- `admin` -> Subdomínio (utilizado para a gestão do sistema)
- `meusite.com.br` -> Domínio

#### 2. HTTP - Hypertext Transfer Protocol
HTTP é o protocolo utilizado para a comunicação entre o Front-End e o Back-End através da internet.

**Estrutura de uma Chamada HTTP:**
- **Método/Verbo**: GET, POST, PUT, DELETE
- **Headers/Cabeçalhos**: Informações adicionais enviadas com a requisição
- **Body** (opcional): Dados enviados com a requisição

**Estrutura de uma Resposta HTTP:**
- **Status Code**: Código que indica o resultado da requisição (ex: 200 para sucesso, 404 para não encontrado)
- **Headers/Cabeçalhos**: Informações adicionais enviadas com a resposta
- **Body** (opcional): Dados retornados na resposta

#### 3. JSON - JavaScript Object Notation
JSON é um formato leve de intercâmbio de dados, utilizado principalmente na comunicação entre Front-End e Back-End.

**Exemplo de JSON:**
```json
{
    "nome": "Lucelho Silva"
}
```
O JSON é composto por pares chave-valor, que permitem a troca de informações estruturadas entre o cliente e o servidor.

#### 4. API REST
API REST (Application Programming Interface usando o padrão Representational State Transfer) é um conjunto de convenções para a criação de serviços web. 

**Má Prática:**
Utilizar diferentes rotas para cada ação (ex: `/produtos/novo`, `/produtos/editar`).

**Boa Prática:**
Utilizar a mesma rota para diferentes ações, diferenciando-as pelo método HTTP (ex: `/produtos` com métodos GET, POST, PUT, DELETE).

### Resumo
Nesta aula, você compreendeu os conceitos fundamentais que permitem a comunicação entre o Front-End e o Back-End, incluindo como as URLs são estruturadas, como o protocolo HTTP funciona e como as APIs REST são desenvolvidas para facilitar essa comunicação.