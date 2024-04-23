# API-IOT-MONGODB

A API conecta o banco de dados mongodb e manipula os dados deixando endpoints para postagem e recuperação de dados.


# O Projeto utiliza:
1.	Express
2.	mongoose
3.  winston
4.  dotenv

## Installation

Por enquanto rodar o projeto não é nada complicado.

Em seu terminal:
```bash
node server.js
```
ou
```bash
npm install nodemon -D
npm run dev
```


## routes

```javascript
GET /mgwine -> Realiza o teste de resposta da API.
GET /mgwine/Qtd -> Buscar registros relacionados a Quantidade.
POST /mgwine/Qtd -> Criar um novo registro relacionado a Quantidade.
GET /mgwine/Temp -> Buscar registros relacionados a Temperatura.
POST /mgwine/Temp -> Criar um novo registro relacionado a Temperatura.
GET /mgwine/LatestTemp -> Buscar o último registro relacionado a Temperatura.
```