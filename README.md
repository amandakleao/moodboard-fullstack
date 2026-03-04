#### moodboard-fullstack
### MoodBoard – Fullstack CRUD Application (React + Node.js + Express)

MoodBoard é uma aplicação fullstack simples para registrar e acompanhar estados de humor diários.

O projeto foi desenvolvido com React no frontend e Node.js + Express no backend, com comunicação via API REST.

### Sobre o Projeto

### O objetivo da aplicação é permitir ao usuário:

  - Registrar como está se sentindo;

  - Escolher um emoji representando o humor;

  - Visualizar histórico de registros;

  - Remover registros;

### Este projeto foi criado com foco em prática de:

  - CRUD completo

  - Comunicação entre frontend e backend

  - Gerenciamento de estado no React

  - Estruturação básica de API REST

### Tecnologias Utilizadas

Frontend

  - React

  - Vite

  - JavaScript (ES6+)

  - Fetch API

Backend

- Node.js

- Express

- CORS

- JSON middleware

### Conceitos Aplicados

- Componentização

- useState

- useEffect

- Requisições HTTP (GET, POST, DELETE)

- Manipulação de arrays (map, filter, spread operator)

- Estrutura REST

### Estrutura do Projeto

moodboard-fullstack

│

├── mood-api (backend)

│ └── server.js

│

└── mood-frontend (frontend)

└── src

└── App.jsx

### Como Rodar o Projeto

1️⃣ Backend

Dentro da pasta `mood-api`:

bash

npm install

node server.js

O servidor rodará em: http://localhost:3000

2️⃣ Frontend

Dentro da pasta do frontend:

npm install

npm run dev

A aplicação rodará em: http://localhost:5173

### Endpoints da API

GET /moods

Retorna todos os registros de humor.

POST /moods

Cria um novo registro.

{

  "text": "Hoje estou produtiva",

  "emoji": "💻"

}

DELETE /moods/:id

Remove um registro pelo ID.

### 📷 Screenshot

(Adicionar aqui uma imagem da interface depois que finalizar o layout)

### Melhorias Futuras

Persistência em banco de dados (MongoDB ou PostgreSQL)
