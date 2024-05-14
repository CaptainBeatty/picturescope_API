const picturesData = require('../models/pictures')

function getPictures() {
	return picturesData.map(({ id, url, title, description, device }) => ({
		id,
		url, 
		title, 
		description,
		device
	}))
}


module.exports = getPictures