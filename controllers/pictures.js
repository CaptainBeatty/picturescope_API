const picturesData = require('../models/pictures')

function getPictures() {
	return picturesData.map(({ url,title, description, device }) => ({
		url, 
		title, 
		description,
		device
	}))
}

module.exports = getPictures
