const express = require('express')
const router = express.Router()
const picturesCtrl = require('../controllers/pictures')

router.get('/', picturesCtrl.getAllPicture);
router.get('/:id', picturesCtrl.getOnePicture);



module.exports = router
