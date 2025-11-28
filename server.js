const express = require('express');
const app = express();

app.use(express.static('public')); // Serve static files later

// 🏠 HOME PAGE
app.get('/', (req, res) => {
  res.send(`
    <div style="text-align:center; padding:50px; background:#f0f8ff;">
      <h1>👋 CLIENT WEBSITE LIVE!</h1>
      <p>Deployed by Robert - DevOps Master 🚀</p>
      <p>Port: ${process.env.PORT || 3000}</p>
      <div style="margin:20px;">
        <a href="/about" style="margin:10px; padding:10px; background:#007bff; color:white; text-decoration:none; border-radius:5px;">About</a>
        <a href="/api/users" style="margin:10px; padding:10px; background:#28a745; color:white; text-decoration:none; border-radius:5px;">API</a>
      </div>
    </div>
  `);
});

// 📄 ABOUT PAGE
app.get('/about', (req, res) => {
  res.send(`
    <div style="padding:50px; max-width:800px; margin:auto;">
      <h1>📄 About Our Company</h1>
      <p>This is a demo website deployed by Robert using Jenkins + Kubernetes!</p>
      <ul>
        <li>✅ CI/CD Pipeline</li>
        <li>✅ Docker Containerized</li>
        <li>✅ Kubernetes Deployed</li>
        <li>✅ Auto-scales on traffic</li>
      </ul>
      <a href="/" style="color:#007bff;">← Back Home</a>
    </div>
  `);
});

// 🔗 API ENDPOINT
app.get('/api/users', (req, res) => {
  res.json([
    { id: 1, name: "Robert", role: "DevOps Engineer" },
    { id: 2, name: "Client", role: "Happy Customer" }
  ]);
});

// 🧪 SECRET ENDPOINT (play with this!)
app.get('/secret/:code', (req, res) => {
  const code = req.params.code;
  if (code === 'devops2025') {
    res.send('<h1>✅ SECRET UNLOCKED! You found the admin page!</h1>');
  } else {
    res.send('<h1>❌ Wrong code. Try /secret/devops2025</h1>');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Client website running on http://localhost:${PORT}`);
  console.log(`📱 Test these URLs:`);
  console.log(`   http://localhost:${PORT}/about`);
  console.log(`   http://localhost:${PORT}/api/users`);
  console.log(`   http://localhost:${PORT}/secret/devops2025`);
});
