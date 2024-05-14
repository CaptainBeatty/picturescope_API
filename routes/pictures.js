const express = require('express')
const router = express.Router()
const getPictures = require('../controllers/pictures')






router.get('/pictures', function (req, res, next) {
	const picturesList = getPictures()
	res.send({ picturesList })
})



module.exports = router