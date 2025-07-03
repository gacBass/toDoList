import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
const PORT = 4000;

app.use(cors());

// The following code is related to the dolarhoy proxy endpoint
// app.get('/dolarhoy', async (req, res) => {
//   try {
//     const response = await fetch('https://monedapi.ar/api/usd/bolsa');
//     const data = await response.json();
//     res.json(data);
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to fetch data' });
//   }
// });

app.listen(PORT, () => {
  console.log(`Proxy server running at http://localhost:${PORT}`);
});