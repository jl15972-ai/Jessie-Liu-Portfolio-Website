const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';

app.use(express.static(path.join(__dirname, 'dist')));

// SPA fallback: let client-side routing handle unknown paths
app.get(/.*/, (_req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, HOST, () => {
  console.log(`Portfolio server running at http://${HOST}:${PORT}`);
});
