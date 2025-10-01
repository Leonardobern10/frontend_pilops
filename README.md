# Front-end [DESAFIO] Pilops
Esse projeto consiste no frontend da aplicação correspondente ao desafio proposto pela empresa **Pilops** para a vaga de Engenheiro de Software Estágio/Junior.

Aqui estarão, além da disponibilização do próprio frontend em si, algumas das decisões técnicas durante a codificação do projeto.

## Decisões técnicas
### Porque Material UI?
O **Material UI** é uma framework para a criação de componentes que permite uma boa centralização da estilização global da aplicação, evitando que estilos aleatórios sejam aplicados e replicados ao sistema. Por meio de seu arquivo `theme.ts` fica facilitado a especificação de design do projeto, como cores, espaçamento, fontes, etc. Podemos citar também sua compatilibilidade e forte integração diversas bibliotecas muito usadas como **React Hook Form**, **Zustand**, etc.

### Porque criar um único componente `DetailFlight`?
Esse componente renderiza um texto que representa o `titulo` daquele conteudo e um outro texto `content`. Esse estilo e formatação correspondem a todas essas informações auxiliares, inclusive o `balance` (saldo), na qual a única diferença é a cor do salde que varia conforme o valor: 

- Saldo > 0 : Verde
- Saldo <= 0 : Vermelho

Aqui o que foi feito é criar uma propridade no componente ao qual indica se ele irá receber um `balance` através de um booleano. 

- Quando `balance` é false, nada se altera;
- Quando `balance` é true, então o componente verifica o valor recebido e checa as condicionais:
    - Saldo >= 0 : Verde
    - Saldo < 0 : Vermelho

Essa abordagem permite uma padronização do estilo e formatação dominante no projeto, ao passo que gera uma leve personalização independente.

### Por que separar estilos do Material UI com React?
No React tudo o que está dentro de um componente, ao ser renderizado é recriado. De modo que todas as definições de estilos inline que são feitas (no Materil UI através da propriedade `sx`) é recriado. Surgem algumas alternativas à isso:


- Para estilos que não utilizam o `theme`, podemos definir objetos fora do componente, utilizando essas estilização no componente mas evitando que sejam sempre recriadas.
    - Dividir esses estilos em arquivos diferentes também é uma boa abordagem.
- Para estilos que utilizam o `theme`, podemos utilizar a mesma abordagem anterior mas é importante utilizar o `useMemo` para evitar que essas estilizações sejam recriadas a cada renderização, a não ser que sejam alteradas.
- Outra abordagem também utilizada é a criação de componentes utilizando `styled` do material, que remove as estilizações inline e impede a recriação.

### Por que a criação dos hooks personalizados?
A criação desses hooks permite remover informações do componente ao qual ele não "precisa saber", é o SRP - Princípio da Separação de Responsabilidades. A função do nosso componente é renderizar a informação recebida e não "saber como ela foi obtida" o que chamamos de "encapsulamento". Entre outras vantagens, podemos citar:

- Permite uma melhor legibilidade do código e extensão, pois caso em algum momento seja alterada a forma de se obter os dados, retornando no formato correto não há muita problemas.
- Essas funções (hooks) podem ser reutilizados em qualquer lugar da aplicação sem repetir a logica da requisição.

- OBS: Um hook personalizado é uma função mas que depende ou utiliza alguns dos hooks fornecidos pelo React. Ex: `useEffect`, `useState`, etc.