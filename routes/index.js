const express = require('express')
const router = express.Router()
// const getPictures = require('../controllers/pictures')
// const getPicture = require('../controllers/picture')
const mongoose = require('mongoose');
const Picture = require('../models/pictures');
require("dotenv").config();


router.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
	next();
  });
  mongoose.connect(process.env.BDD_URL,
  { useNewUrlParser: true,
	useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));
  
router.post('/pictures', (req, res, next) => {
	delete req.body._id;
	const picture = new Picture({
	  ...req.body
	});
	picture.save()
	  .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
	  .catch(error => res.status(400).json({ error }));
  });

router.get('/pictures', (req, res, next) => {
	Picture.find()
	  .then(pictures => res.status(200).json(pictures))
	  .catch(error => res.status(400).json({ error }));
  });

  router.get('/pictures/:id', async (req, res) => {
	const { id } = req.params;
  
	try {
	  const entry = await Picture.findById(id);
	  if (entry) {
		res.json(entry);
	  } else {
		res.status(404).json({ error: 'Entry not found' });
	  }
	} catch (error) {
	  console.error('Error fetching detail by ID', error);
	  res.status(500).json({ error: 'Failed to fetch detail by ID' });
	}
  });

  router.delete('/pictures/:id', async (req, res) => {
	const { id } = req.params;
  
	try {
	  const deletedPicture = await Picture.findByIdAndDelete(id);
	  if (deletedPicture) {
		res.json({ message: 'Picture deleted successfully!' });
	  } else {
		res.status(404).json({ error: 'Picture not found' });
	  }
	} catch (error) {
	  console.error('Error deleting detail by ID', error);
	  res.status(500).json({ error: 'Failed to delete detail by ID' });
	}
  });

module.exports = router
