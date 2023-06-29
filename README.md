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

Siga as instruções abaixo para configurar e executar o projeto do Caixa Eletrônico:

### 1. Instalação do Docker

- Acesse o site oficial do Docker: [https://www.docker.com/get-started](https://www.docker.com/get-started)
- Faça o download da versão adequada do Docker para o seu sistema operacional.
- Siga as instruções de instalação específicas para o seu sistema.
- Verifique se o Docker foi instalado corretamente executando o seguinte comando no terminal:
  ```
  docker --version
  ```
- Verifique se o Docker está em execução executando o seguinte comando:
  ```
  docker ps
  ```

### 2. Instalação do Node.js e npm

- Acesse o site oficial do Node.js: https://nodejs.org
- Faça o download da versão LTS (Long Term Support) recomendada para a sua plataforma.
- Siga as instruções de instalação específicas para o seu sistema.
- Verifique se o Node.js e o npm foram instalados corretamente executando os seguintes comandos no terminal:
  ```
  node -v
  npm -v
  ```

### 3. Instalação das dependências

- Instale o PostgreSQL:
  - Execute o seguinte comando para iniciar um contêiner Docker com o PostgreSQL:
    ```
    docker run -p 5432:5432 -v /tmp/database:/var/lib/postgresql/data -e POSTGRES_PASSWORD=1234 -d postgres
    ```

  - Acesse o banco de dados usando um cliente SQL ou execute o comando a seguir para verificar se o contêiner Docker está em execução:
    ```
    docker ps
    ```
- Acesse a pasta do projeto e instale as dependências:
  ```
  npm install
  ```

### 4. Criação do banco de dados

- Execute as migrações para criar o banco de dados:
  ```
  npx prisma migrate dev --name init
  ```

### 5. Execução dos testes

- Execute os testes utilizando o seguinte comando:
  ```
  npm run test
  ```

### 6. Execução da API

- Inicie a aplicação com o seguinte comando:
  ```
  npm run start
  ```

### 7. Acesso ao Swagger

- Abra o Swagger em seu navegador utilizando o seguinte endereço: `{URL}/swagger`


