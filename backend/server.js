const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// Configuration de l'application
const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Connexion à MongoDB
mongoose.connect('mongodb://localhost:27017/shortvideo', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Routes principales
app.get('/', (req, res) => {
  res.send('Backend de l\'application de vidéos courtes');
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
