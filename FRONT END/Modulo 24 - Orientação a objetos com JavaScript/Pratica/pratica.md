# 📝 Pratique

Este projeto demonstra o conceito de polimorfismo em JavaScript, utilizando três abordagens diferentes para a criação de classes e herança:

1. **Prototype:** Métodos e propriedades são adicionados ao protótipo da função construtora.
2. **Método Construtor:** Reutilização de código entre construtores usando `call`.
3. `extends` (ES6): Criação de subclasses que herdam de uma classe base usando a palavra-chave `extends`.

### Exemplos

-   **Concessionária (Prototype):** Demonstra a relação entre concessionária, funcionários e carros, com foco na venda de carros e cálculo de comissões.
-   **Pessoa, Estudante e Professor (Construtor e `extends`):** Implementa uma hierarquia básica de classes, ilustrando como o polimorfismo permite que objetos de diferentes classes respondam ao mesmo método (`apresentar`) de maneiras específicas.
-   **Animal, Cachorro e Gato (`extends`):** Exemplifica como o polimorfismo permite que subclasses sobrescrevam o método `emitirSom` para produzir comportamentos distintos.

### Explicação dos 3 Métodos de Criação

#### 1. Prototype

-   **Vantagens:**
    -   Simplicidade e compatibilidade com versões antigas do JavaScript.
    -   Permite adicionar métodos e propriedades após a criação da função construtora.
-   **Desvantagens:**
    -   Menos legível e intuitivo em comparação com `extends`.
    -   Pode levar a problemas de herança prototípica se não for implementada com cuidado.

#### 2. Método Construtor (`call`)

-   **Vantagens:**
    -   Permite reutilizar código entre construtores, evitando duplicação.
    -   Oferece controle sobre a inicialização de propriedades em subclasses.
-   **Desvantagens:**
    -   A herança de métodos precisa ser feita manualmente, o que pode ser verboso.
    -   Menos legível em comparação com `extends`.

#### 3. `extends` (ES6)

-   **Vantagens:**
    -   Sintaxe clara e concisa para definir herança.
    -   Facilita a sobrescrita de métodos em subclasses usando `super`.
    -   Melhora a legibilidade e a organização do código.
-   **Desvantagens:**
    -   Suporte limitado em navegadores mais antigos (pode ser necessário usar transpiladores como Babel).

### Conclusão

O polimorfismo é um conceito poderoso em POO que permite flexibilidade, reutilização de código e extensibilidade. Em JavaScript, você pode implementar o polimorfismo usando diferentes abordagens, cada uma com suas próprias vantagens e desvantagens. A escolha da abordagem depende das necessidades específicas do seu projeto e do seu estilo de programação.

**Observação:** O exemplo da concessionária utiliza o método `prototype`, enquanto os exemplos de Pessoa/Estudante/Professor e Animal/Cachorro/Gato utilizam os métodos construtor e `extends`, respectivamente.

**Lembre-se:** Para executar os exemplos, copie o código para um arquivo JavaScript e execute-o em um ambiente Node.js ou em um navegador.

**Para mais informações sobre polimorfismo em JavaScript, consulte a documentação oficial e outros recursos online.**

**Boa prática!**
