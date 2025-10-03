# Front-end [DESAFIO] Pilops
Esse projeto consiste no frontend da aplicação correspondente ao desafio proposto pela empresa **Pilops** para a vaga de Engenheiro de Software Estágio/Junior.

Aqui estarão, além da disponibilização do próprio frontend em si, algumas das decisões técnicas durante a codificação do projeto.

Projeto rodando em: https://frontend-pilops.vercel.app/flights

![](https://img.shields.io/badge/Node.js-5FA04E.svg?style=for-the-badge&logo=nodedotjs&logoColor=white)
![](https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white)
![](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)
![](https://img.shields.io/badge/Vite-646CFF.svg?style=for-the-badge&logo=Vite&logoColor=white)
![](https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black)
![](https://img.shields.io/badge/React%20Router-CA4245.svg?style=for-the-badge&logo=React-Router&logoColor=white)
![](https://img.shields.io/badge/Material%20Design-6750A4.svg?style=for-the-badge&logo=Material-Design&logoColor=white)
![](https://img.shields.io/badge/Axios-5A29E4.svg?style=for-the-badge&logo=Axios&logoColor=white)
![](https://img.shields.io/badge/Prettier-F7B93E.svg?style=for-the-badge&logo=Prettier&logoColor=black)

## Tecnologias utilizadas

Node.js - Ambiente de execução JavaScript no servidor.
TypeScript - Tipagem estática para JavaScript.
React - Biblioteca para construção de interfaces.
Vite - Ferramenta de build rápida para frontend.
Material UI	- Biblioteca de componentes UI com design consistente.
Axios - Cliente HTTP para comunicação com backend.
React Router - Gerenciamento de rotas SPA.
Prettier - Padronização de formatação de código.

## Sumário
1. [Como rodar o projeto](#como-rodar-o-projeto)
2. [Funcionalidades](#funcionalidades)
3. [Modelagem](#modelagem)
4. [Decisões técnicas](#decisões-técnicas)
5. [Melhorias futuras](#melhorias-futuras)

## Como rodar o projeto

1. Faça o clone do repopositório

```shell
git clone https://github.com/Leonardobern10/frontend_pilops
```

2. Entre na pasta do projeto
```shell
cd frontend_pilops
```

3. Instale as dependências
```shell
npm install
```

4. Defina as variáveis de ambiente (servidor local)

```shell
VITE_BASE_URL=http://localhost:5173
```

5. Execute a aplicação

```shell
npm run dev
```

Acesse: http://localhost:5173

**É necessário que servidor local de aplicação esteja rodando**.

## Funcionalidades

### 1. Acessar histórico: O usuário consegue acessar seu histórico de vôos, exibindo as seguintes métricas:

- aircraft: Dados referentes à aeronave
    - name: Nome da aeronave
    - registration: Registro 
    - airline: Linha área
- flightData: Dados referentes ao registro de vôo
    - date: Data
    - balance: Saldo
    - route: Dados referentes à rota feita
        - from: Partida
        - to: Chegada

   **Exemplo**:

    ```json
    aircraft: {
        name: 'Cessna 172 G1000',
        registration: 'PR-PNK',
        airline: 'Pilops Academy'
        },
    flightData: {
        date: '2025-07-22',
        balance: 1065
        route: { 
            from: 'SBRJ', 
            to: 'SBFZ' 
        },
    }
    ```
### 2. Consultar detalhes de um vôo específico: O usuário consegue, ao acessar em um registro de vôo específico, obter mais detalhes sobre o mesmo. Os dados relatados são:

- aircraft: Dados referentes à aeronave
    - name: Nome da aeronave
    - registration: Registro 
    - airline: Linha área
- flightData: Dados referentes ao registro de vôo
    - date: Data
    - balance: Saldo
    - route: Dados referentes à rota feita
        - from: Partida
        - to: Chegada
    - xp: Pontuação de xp adquirida
    - missionBonus: Pontuação bonus (em porcentagem) adquirida

    **Exemplo:**
    ```json
    aircraft: {
        name: 'Cessna 172 G1000',
        registration: 'PR-PNK',
        airline: 'Pilops Academy'
        },
    flightData: {
        date: '2025-07-22',
        balance: 1065
        route: { 
            from: 'SBRJ', 
            to: 'SBFZ' 
        },
        xp: 445,
        missionBonus: 1
    }
    ```

### 3. Consultar pontuação com base no histórico: O usuário consegue, ao clicar no botão "Consultar pontuação geral", obter dados estatísticos sobre a pontuação com base no seu histórico. As estatísticas são:

- balance: O saldo total obtido da soma de todas as pontuações do usuário
- xp: O sado total obtido da soma de todos xps adquiridos.
- missionBonus: O saldo total de bonus de missão obtidos da soma de todos os bonus adquiridos.
- maxBalance: O registro de vôo de maior pontuação atingida pelo usuário.
- minBalance: O registro de vôo de menor pontuação atingida pelo usuário.

    **Exemplo:**

    ```json
    balance: "189464.87",
    xp: "31781.00",
    missionBonus": "9.65",
    maxBalance: {
        id: "FL-067",
        aircraft: {
        name: "ATR 72",
        registration: "PR-JFT",
        airline: "Pilops Regional"
        },
        flightData: {
            date: "2025-09-09",
            balance: 4943,
            route: {
                "from": "SBSP",
                "to": "SBFZ"
        },
        xp: 125,
        missionBonus": 0.05
        }
    },
    minBalance: {
        id: "FL-006",
        aircraft: {
        name: "Pilatus PC-12",
        registration: "PR-HSP",
        airline: "Pilops Cargo"
        },
        flightData: {
            date: "2025-08-10",
            balance: -4999,
            route: {
                from: "SBME",
                to: "SBSP"
        },
        xp: 402,
        missionBonus: 0.1
        }
    }

## Modelagem
### Casos de uso:
![Casos de uso](public/image.png)

### Fluxo geral
![Modelagem do fluxo geral](public/image-1.png)

### Histórico

![Modelagem do historico](public/image-3.png)

### Detalhes de vôo
![Modelagem do detalhes de voo](public/image-2.png)

### Obter Pontuações
![Modelagem de pontuações](public/image-4.png)


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

### Por que o arquivo vercel.json?
O arquivo `vercel.json` trata de um erro muito comum no deploy de SPA (Sigle Page Application) hospedades na plataforma (Vercel).

O que acontece:

- Quando entramos no site pela home (/) e cliclamos em algum elemento com link e somos redirecionados para `/flights`, o responsável por esse roteamento é o router (no nosso caso, **React Router**), no lado do cliente.
- Mas quando digitamos e buscamos diretamente no navegador `https://frontend-pilops.vercel.app/flights`, o próprio navegador faz uma requisição HTTP real para o servidor da Vercel pedindo exatamente o arquivo `/flights`.
- Como esse arquivo não existe fisicamente no servidor, o servidor retorna **404**.

Resolução:
Para resolver esse problemas, configuramos um **rewrite** para que qualquer rota desconhecida seja redirecionada para o `index.html`, e aí então nosso frontend consiga cuidar do roteamento.

Obs: **Deve estar localizado na raiz do projeto**.

```
{
    "rewrites": [
        { "source": "/(.*)", "destination": "/"}
    ]
}
```

**Isso garante que qualquer rota seja servida pelo `index.html`.**

Outra abordagem que também utilizaremos é definir ao nosso **React Router** uma rota coringa para que toda a vez que uma uri que não existe for pesquisada, o usuario seja direcionado para a home (`/`) do projeto.

Upgrade: Em melhorias futuras, devemos implementar uma pagina `NotFoundPage` com uma representação e animação, indicando que o usuário busca por uma pagina que não existe, e dar à ele a opção de voltar.

## Melhorias futuras
1. Adição de testes unitários e integração com React Testing Library, e E-2-E (Cypress);
2. Adição de alternância entre temas Claro e Escuro.
3. Adição de animações com Framer Motion (mais simples) ou GSAP (mais complexas).