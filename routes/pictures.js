const express = require('express')
const router = express.Router()
const picturesCtrl = require('../controllers/pictures')
// const getPicture = require('../controllers/picture')

router.get('/', picturesCtrl.getAllPicture);
router.post('/', picturesCtrl.createPicture);
router.get('/:id', picturesCtrl.getOnePicture);
router.put('/:id', picturesCtrl.modifyPicture);  
router.delete('/:id', picturesCtrl.deletePicture);

module.exports = router
