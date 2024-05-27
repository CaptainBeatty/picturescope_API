const mongoose= require('mongoose');

const picturesSchema = mongoose.Schema({
	
	url: {type:String, required:true},
	title: {type:String, required:true},
	description: {type:String, required:true},
	device: {type:String, required:true}
});

module.exports = mongoose.model('pictures', picturesSchema);