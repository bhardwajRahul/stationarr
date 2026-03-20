const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Plex Stationarr running on http://localhost:${PORT}`);
    console.log(`📺 Access from your network at http://<your-ip>:${PORT}`);
    console.log(`⚙️  Configured for Plex server: YOUR_PLEX_SERVER:32400`);
});