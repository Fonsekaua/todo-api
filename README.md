# TODO - API

## O que é este projeto?
`Projeto de criação de uma api para gerenciamento de tarefas`

## O que foi usado no projeto: 
#### Node.js com Express – para criar o servidor e gerenciar rotas.

#### Prisma – para conexão e manipulação de banco de dados relacional (PostgreSQL).

## Estrutura do projeto

### O projeto foi desenvolvido seguindo o padrão MVC (Model-View-Controller):

#### Model: 
`responsável pela interação com o banco de dados, utilizando o Prisma para manipulação de tabelas e registros do PostgreSQL.`

#### Controller: 
`contém a lógica da aplicação e manipula as requisições recebidas pelo servidor Express, chamando os serviços ou models conforme necessário.`

#### View: 
`neste projeto, a API não possui interface própria; a comunicação é feita via JSON para o front-end ou para ferramentas como o Postman.`

#### Routes: 
`organiza as rotas da aplicação, ligando endpoints aos controllers correspondentes.`



## Como rodar: 
### instale as dependencias com: 
`npm install`

### rode o servidor com: 
`npm run dev`
