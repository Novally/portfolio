const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// ── Security Headers ──────────────────────────────
app.use((req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    res.setHeader(
        'Content-Security-Policy',
        "default-src 'self'; style-src 'self' https://fonts.googleapis.com; font-src https://fonts.gstatic.com; script-src 'self'"
    );
    next();
});

// ── Rate Limiting ─────────────────────────────────
const rateLimit = {};
app.use((req, res, next) => {
    const ip = req.ip;
    const now = Date.now();
    if (!rateLimit[ip]) rateLimit[ip] = [];
    rateLimit[ip] = rateLimit[ip].filter(t => now - t < 60000);
    if (rateLimit[ip].length > 100) {
        return res.status(429).send('Too many requests');
    }
    rateLimit[ip].push(now);
    next();
});

// ── Static Files ──────────────────────────────────
app.use(express.static(path.join(__dirname, 'public')));

// ── Routes ────────────────────────────────────────
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));
app.get('/experience', (req, res) => res.sendFile(path.join(__dirname, 'public', 'experience.html')));
app.get('/about', (req, res) => res.sendFile(path.join(__dirname, 'public', 'about.html')));

// ── 404 Fallback ──────────────────────────────────
app.use((req, res) => res.status(404).sendFile(path.join(__dirname, 'public', 'index.html')));

app.listen(PORT, () => console.log(`✅ Running at http://localhost:${PORT}`));