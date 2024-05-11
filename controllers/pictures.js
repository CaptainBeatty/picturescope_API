const picturesData = require('../models/pictures')

exports.getAllPicture= function (req, res, next) {
	picturesData.find()
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
    Picture.findOne({
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

