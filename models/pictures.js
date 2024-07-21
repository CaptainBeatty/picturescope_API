const mongoose= require('mongoose');

const picturesSchema = mongoose.Schema({
	userId: { type: String, required: true},
	imageUrl: {type:String, required:true},
	title: {type:String, required:true},
	description: {type:String, required:true},
	device: {type:String, required:true}
});

module.exports = mongoose.model('pictures', picturesSchema);