const express = require('express')
const router = express.Router()
const picturesCtrl = require('../controllers/pictures')


router.get('/:id', picturesCtrl.getOnePicture);
router.get('/', picturesCtrl.getAllPicture);


module.exports = router
