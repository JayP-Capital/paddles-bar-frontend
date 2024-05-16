// pages/api/items/[id].js
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const { id } = req.query;
  const filePath = path.resolve('./public', 'db.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(jsonData);

  const item = data.items.find(item => item.id === parseInt(id));
  if (item) {
   return res.status(200).json(item);
  } else {
    res.status(404).json({ error: 'Item not found' });
  }
}
