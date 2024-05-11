const express = require('express')
const path = require('path')
const pictureRoutes = require('./routes/pictures')
const mongoose = require('mongoose');
const app = express()


mongoose.connect('mongodb+srv://juliengrangedev:rI9L3MuzqY1XG4pV@cluster1.cj7fzyr.mongodb.net//test?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

  app.use(express.json());

  app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
	next();
  });
  
  app.use("/api/sauces", pictureRoutes);
  
  module.exports = app;
