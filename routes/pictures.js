const express = require('express')
const router = express.Router()

const auth = require('../middleware/auth');

const picturesCtrl = require('../controllers/pictures')


router.get('/', auth, picturesCtrl.getAllPicture);
router.post('/', auth, picturesCtrl.createPicture);
router.get('/:id', auth, picturesCtrl.getOnePicture);
router.put('/:id', auth, picturesCtrl.modifyPicture);  
router.delete('/:id', auth, picturesCtrl.deletePicture);

module.exports = router
