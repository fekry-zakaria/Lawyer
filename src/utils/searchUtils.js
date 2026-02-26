const normalize = (value) => {
  return String(value || '').trim().toLowerCase();
};

const scoreItem = (q, item) => {
  if (!q) return 0;

  const title = normalize(item.title);
  if (title.includes(q)) return 3;

  const keywords = Array.isArray(item.keywords) ? item.keywords : [];
  for (const kw of keywords) {
    if (normalize(kw).includes(q)) return 2;
  }

  return 0;
};

export const searchItems = (query, items, limit = 5) => {
  const q = normalize(query);
  if (!q) return [];

  return (items || [])
    .map((item) => ({ item, score: scoreItem(q, item) }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((x) => x.item);
};
