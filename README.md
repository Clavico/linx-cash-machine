<h1 align="center">
    Cash Machine
</h1>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:
- Node.JS
- Nest.JS
- PostgreSQL
- Jest
- Swagger

## 💻 Projeto

O Cash Machine é um projeto criado pela Linx para testar o conhecimento através de código.

## 👨‍🏫 Como usar

### Instalação

- Faça a instalação do PostgreSQL: `docker run -p 5432:5432 -v /tmp/database:/var/lib/postgresql/data -e POSTGRES_PASSWORD=1234 -d postgres`

- Acessa a pasta do projeto e Rode o comando `npm install`

### Execução do Projeto

#### Criando o banco de dados
- Rodar as migrations: `npx prisma migrate dev --name init` 

#### Rodandos os testes
- Rodar os testes: `npm run test` 

#### Rodando a API
- Rodar a aplicação: `npm run start` 
- Abrir no navegador o Swagger `{PATH}/swagger`
