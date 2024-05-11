const express = require('express')
const router = express.Router()
const getPictures = require('../controllers/pictures')
const getPicture = require('../controllers/picture')

router.post('/picture', (req, res, next) => {
	delete req.body._id;
	const thing = new Thing({
	  ...req.body
	});
	thing.save()
	  .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
	  .catch(error => res.status(400).json({ error }));
  });

router.get('/picture', function (req, res) {
	const { id } = req.query
	const pictureData = getPicture(id)
		if (!pictureData) {
			res.status(400).send('Not found.')
		} else {
			res.send({ pictureData })
		}
})


router.get('/pictures', function (req, res, next) {
	const picturesList = getPictures()
	res.send({ picturesList })
})



module.exports = router
