const express = require('express');
const cors = require('cors'); // pentru a permite cereri CORS
const app = express();
const port = 5000; // portul pe care va rula serverul

// Permite accesul la fișierele din folderul public
app.use(express.static('public')); // important pentru a servi fișiere precum .glb

// Folosim CORS pentru a permite frontend-ului React să facă cereri
app.use(cors());

// Endpoint care răspunde la cererea testDOM
app.get('/testDOM', (req, res) => {
  const param1 = req.query.param1 || 'defaultA';
  const param2 = req.query.param2 || 'defaultB';

  // Răspuns JSON
  res.json({
    message: 'Succes!',
    received: {
      param1: param1,
      param2: param2
    }
  });
});

// Pornim serverul pe portul 5000
app.listen(port, () => {
  console.log(`Serverul rulează pe http://localhost:${port}`);
});
