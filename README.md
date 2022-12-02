<h1 align="center"> Projeto back </h1>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>


<br>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- HTML e CSS
- JavaScript
- MySql2
- EJS
- Git e Github

## 💻 Projeto

para rodar o projeto basta seguir os seguintes comandos

 - npm init -y
 - npm install express ejs uuid method-override
 - npm i nodemon -D
 - npm i
 - nodemon 

.obs projeto executado com variáveis de hambientes

- Preencher o arquivo .ENV

DB_USER=root //ou nome do usuário do banco de dados

DB_PASS= //Inserir a senha do banco de dados, caso não tenha, deixar somente o sinal de igual após a variável de ambiente criada

DBN_NAME=databaseName //Inserir o nome do banco de dados (caso não exista, o sequelize irá criar)

DB_HOST=localhost //Ou ip do servido

DB_DIALECT=mysql //Inserir o dialeto do banco de dados: mysql, pg, oracle, etc..

DB_PORT=3306 //Inserir a porta do banco de dados, verificar no XAMPP a porta do mysql

-para dropar o banco de dados execute o comando:
npx sequelize db:create

para rodar o projeto execute o comando : nodemon start ou node index.js





