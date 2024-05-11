const mongoose= require('mongoose');

// const pictures = 
// [
// 	{ id: "1", url: "https://picturescope-api.onrender.com/images/image-1.jpg", title: "beach", description: "Une belle photo",device: "Iphone SE1"},
// 	{ id: "2", url: "https://picturescope-api.onrender.com/images/image-2.jpg", title: "boat", description: "Une belle photo",device: "Iphone SE1"},
// 	{ id: "3", url: "https://picturescope-api.onrender.com/images/image-3.jpg", title: "forest", description: "Une belle photo" ,device: "Iphone SE1"},
// 	{ id: "4", url: "https://picturescope-api.onrender.com/images/image-4.jpg", title: "city", description: "Une belle photo" ,device: "Iphone SE1"},
// 	{ id: "5", url: "https://picturescope-api.onrender.com/images/image-5.jpg", title: "italy", description: "Une belle photo" ,device: "Iphone SE1"},
// 	{ id: "6", url: "https://picturescope-api.onrender.com/images/jardinerie.jpg", title: "jardinerie", description: "Un paradie en ville." ,device: "Iphone SE1"},
// 	{ id: "7", url: "https://picturescope-api.onrender.com/images/thoissey.jpg", title: "little bridge", description: "Une balade hivernale avant Noël",device: "Iphone SE1"},
// 	{ id: "8", url: "https://picturescope-api.onrender.com/images/thoissey.jpg", title: "little bridge", description: "Une balade hivernale avant Noël",device: "Iphone SE1"},
// 	{ id: "9", url: "https://picturescope-api.onrender.com/images/thoissey.jpg", title: "little bridge", description: "Une balade hivernale avant Noël",device: "Iphone SE1"},
// 	{ id: "10", url: "https://picturescope-api.onrender.com/images/thoissey.jpg", title: "little bridge", description: "Une balade hivernale avant Noël",device: "Iphone SE1"},
// 	{ id: "11", url: "https://picturescope-api.onrender.com/images/thoissey.jpg", title: "Thoissey", description: "Une balade hivernale avant Noël",device: "Iphone SE1"},
//   ]
// module.exports = pictures;

const picturesSchema = mongoose.Schema({
	url: {type:String, require:true},
	title: {type:String, require:true},
	description: {type:String, require:true},
	device: {type:String, require:true},
});


module.exports = mongoose.model('pictures', picturesSchema);