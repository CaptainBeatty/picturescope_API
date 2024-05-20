const mongoose= require('mongoose');

const picturesSchema = mongoose.Schema({
	url: {type:String, require:true},
	title: {type:String, require:true},
	description: {type:String, require:true},
	device: {type:String, require:true},
});

module.exports = mongoose.model('pictures', picturesSchema);