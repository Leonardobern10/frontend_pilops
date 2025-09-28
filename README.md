# Front-end [DESAFIO] Pilops
Esse projeto consiste no frontend da aplicação correspondente ao desafio proposto pela empresa **Pilops** para a vaga de Engenheiro de Software Estágio/Junior.

Aqui estarão, além da disponibilização do próprio frontend em si, algumas das decisões técnicas durante a codificação do projeto.

## Decisões técnicas
### Porque Material UI?
O **Material UI** é uma framework para a criação de componentes que permite uma boa centralização da estilização global da aplicação, evitando que estilos aleatórios sejam aplicados e replicados ao sistema. Por meio de seu arquivo `theme.ts` fica facilitado a especificação de design do projeto, como cores, espaçamento, fontes, etc. Podemos citar também sua compatilibilidade e forte integração diversas bibliotecas muito usadas como **React Hook Form**, **Zustand**, etc.
