const express = require("express");
const path = require('path')
const picturesRoutes = require('./routes/pictures.js')
const userRoutes = require('./routes/user.js')
const app = express()
const mongoose = require('mongoose');
require("dotenv").config();

mongoose.connect(process.env.BDD_URL,
	{ useNewUrlParser: true,
	  useUnifiedTopology: true })
	.then(() => console.log('Connexion à MongoDB réussie !'))
	.catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(express.json());

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization, X-User-Id');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
	next();
  });

app.use('/pictures', picturesRoutes)
app.use('/auth', userRoutes);
app.use('/images', express.static(path.join(__dirname, 'images')));


module.exports = app
