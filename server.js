const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const PUBLIC = path.join(__dirname, 'public');

// Static: /data/global-data.json otomatis tersaji dari public/data/
app.use(express.static(PUBLIC));

// Route view (SPA): semua halaman dilayani satu file index.html
const view = (req, res) => res.sendFile(path.join(PUBLIC, 'index.html'));
['/', '/study', '/quiz', '/profile'].forEach((r) => app.get(r, view));

// Fallback
app.use((req, res) => res.status(404).sendFile(path.join(PUBLIC, 'index.html')));

app.listen(PORT, () => console.log(`Kotoba Transform jalan di http://localhost:${PORT}`));