const pictures = require('../models/pictures')

exports.getAllPicture= function (req, res, next) {
	pictures.find()
	.then(function (pictures) {
		res.status(200).json(pictures);
	})
	.catch(function (error) {
		res.status(400).json({
			error: error
		});
	})
};


exports.getOnePicture = function (req, res, next) {
    pictures.findOne({
            _id: req.params.id
        })
        .then(function (picture) {
            res.status(200).json(picture);
        })
        .catch(function (error) {
            res.status(404).json({
                error: error
            });
        });
};

