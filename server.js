// server.js (ESM)
import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const app = express();

// Habilita CORS para tudo (e já cobre preflight OPTIONS)
app.use(cors({
  origin: true,
  methods: ['GET', 'POST', 'DELETE', 'OPTIONS'],
}));

app.use(express.json());

// ===== “banco” em memória (reseta a cada restart) =====
let cards = [];

// GET /cards
app.get('/cards', (req, res) => {
  res.json(cards);
});

// POST /cards
app.post('/cards', (req, res) => {
  const { titulo } = req.body;

  if (!titulo || typeof titulo !== 'string' || !titulo.trim()) {
    return res.status(400).json({ error: "Campo 'titulo' é obrigatório." });
  }

  const newCard = {
    id: String(Date.now()),
    titulo: titulo.trim(),
    date: new Date().toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'short' }),
  };

  cards.unshift(newCard);
  console.log('[POST /cards] criado:', newCard);
  return res.status(201).json(newCard);
});

// DELETE /cards/:id
app.delete('/cards/:id', (req, res) => {
  const id = String(req.params.id);
  const before = cards.length;

  console.log('[DELETE /cards/:id] recebido:', id, '| total antes:', before);

  cards = cards.filter((c) => String(c.id) !== id);

  if (cards.length === before) {
    console.log('[DELETE /cards/:id] não encontrado:', id);
    return res.status(404).json({ error: 'Card não encontrado.' });
  }

  console.log('[DELETE /cards/:id] removido:', id, '| total depois:', cards.length);
  return res.status(204).send();
});

// Health
const SERVER_STARTED_AT = new Date().toISOString();
app.get('/health', (req, res) => {
  res.json({
    ok: true,
    serverStartedAt: SERVER_STARTED_AT,
    uptimeSeconds: process.uptime(),
  });
});

// Start
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});