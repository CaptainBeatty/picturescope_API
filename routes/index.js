const express = require('express')
const router = express.Router()
const getPictures = require('../controllers/pictures')
const getPicture = require('../controllers/picture')

router.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
	next();
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

router.post('/pictures', function (req, res, next) {
	console.log(req.body);
	res.status(201).json({
	  message: 'Image ajoutée !'
	});
})



module.exports = router
