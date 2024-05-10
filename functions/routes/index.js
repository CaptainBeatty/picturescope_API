const express = require('express')
const router = express.Router()
const getPictures = require('../controllers/pictures')
const getPicture = require('../controllers/picture')



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
