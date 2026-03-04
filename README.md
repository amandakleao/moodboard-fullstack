##### moodboard-fullstack
### MoodBoard – Fullstack CRUD Application (React + Node.js + Express)

MoodBoard é uma aplicação fullstack desenvolvida para registrar, visualizar e gerenciar registros de humor diários.
O projeto utiliza React + Vite no frontend e Node.js + Express no backend, com comunicação via API REST.

#### Sobre o Projeto
O objetivo da aplicação é permitir ao usuário:

Registrar como está se sentindo no dia
Visualizar todos os cards criados
Abrir cada card em uma pré-visualização modal
Excluir um registro individual
Alternar a aparência da barra superior entre tema claro e escuro

Este projeto foi criado com foco em prática de:

CRUD completo (Create, Read, Delete)
Comunicação entre frontend e backend
Estados e eventos no React
Estruturação de API REST
Modularização e organização de código


#### Tecnologias Utilizadas
Frontend

React
Vite
JavaScript (ES6+)
Fetch API
CSS puro (layout customizado)
Ambiente de desenvolvimento com proxy (para evitar CORS)

Backend

Node.js
Express
CORS
JSON middleware (express.json())


#### Conceitos Aplicados

Componentização no React
Hooks: useState, useEffect
Requisições HTTP (GET, POST, DELETE)
Manipulação de arrays (map, filter)
Estrutura REST com rotas organizadas
Modal de pré‑visualização
Estado global local para cards
Uso de ambiente .env no frontend (VITE_API_BASE)
Vite proxy para desenvolvimento (/api → backend)


#### Estrutura do Projeto

##### moodboard-fullstack
```txt
│
├── mood-backend/          # Backend (Node + Express)
│   ├── server.js
│   └── package.json
│
└── mood-frontend/         # Frontend (React + Vite)
    ├── src/
    │   ├── App.jsx
    │   ├── App.css
    │   └── services/
    │       └── api.js
    ├── vite.config.js
    └── package.json
```

#### Como Rodar o Projeto
1️⃣ Backend
Dentro da pasta mood-backend:
```txt
npm install
node server.js
```

O servidor rodará em:
👉 http://localhost:3000

2️⃣ Frontend
Dentro da pasta mood-frontend:

```txt
npm install
npm run dev
```

A aplicação rodará em:
👉 http://localhost:5173

Se estiver usando proxy do Vite (recomendado), as rotas estarão acessíveis por:

/api/cards


#### Endpoints da API

###### GET /cards

Retorna todos os registros de humor.

###### POST /cards

Cria um novo registro.

###### Exemplo de body:

JSON{  "titulo": "Hoje o dia foi produtivo"}

###### DELETE /cards/:id

Remove um registro pelo ID.

##### 📷 Prévia da Interface
<img width="1862" height="945" alt="image" src="https://github.com/user-attachments/assets/01beb935-f452-413f-a6bb-8d9f8115f051" />



##### Melhorias Futuras

Persistência em banco de dados (SQLite, PostgreSQL ou MongoDB);

Edição de cards (PUT /cards/:id);

Autenticação (login);

Filtro e pesquisa de moods;

Exportar histórico.

