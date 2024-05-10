const picturesData = require('../models/pictures')

function getPicture(id) {
	return picturesData.find((pictureslide => pictureslide.id === id))
}

module.exports = getPicture
