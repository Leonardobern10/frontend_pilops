# Front-end [DESAFIO] Pilops
Esse projeto consiste no frontend da aplicação correspondente ao desafio proposto pela empresa **Pilops** para a vaga de Engenheiro de Software Estágio/Junior.

Aqui estarão, além da disponibilização do próprio frontend em si, algumas das decisões técnicas durante a codificação do projeto.

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
VITE_BASE_URL=sua_variavel
```

5. Execute a aplicação

```shell
npm run dev
```

Acesse: http://localhost:5173

**É necessário que servidor local de aplicação esteja rodando**.

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