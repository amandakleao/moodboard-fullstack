const BASE = "http://localhost:3000"; // backend

export async function getCards() {
  const res = await fetch(`${BASE}/cards`);
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Erro ao carregar cards: ${res.status} ${text}`);
  }
  return res.json();
}

export async function createCard({ titulo }) {
  const res = await fetch(`${BASE}/cards`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ titulo })
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Erro ao criar card: ${res.status} ${text}`);
  }
  return res.json();
}

export async function deleteCard(id) {
  const res = await fetch(`${BASE}/cards/${encodeURIComponent(String(id))}`, {
    method: "DELETE"
  });
  if (res.status === 204) return;
  if (res.status === 404) {
    const text = await res.text().catch(() => "");
    throw new Error(`Card não encontrado: ${text || id}`);
  }
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Erro ao deletar card: ${res.status} ${text}`);
  }
}