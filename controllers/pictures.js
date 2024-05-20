const Picture = require('../models/pictures');

exports.createPicture = (req, res, next) => {
  const pictures = new Picture({
    url: req.body.url,
    title: req.body.title,
    description: req.body.description,
    userId: req.body.userId
  });
  pictures.save().then(
    () => {
      res.status(201).json({
        message: 'Post saved successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.getOnePicture = (req, res, next) => {
  Picture.findOne({
    _id: req.params.id
  }).then(
    (pictures) => {
      res.status(200).json(pictures);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};

exports.modifyPicture = (req, res, next) => {
  const pictures = new Picture({
	_id: req.params.id,
	url: req.body.url,
    title: req.body.title,
    description: req.body.description,
    userId: req.body.userId
  });
  Picture.updateOne({_id: req.params.id}, pictures).then(
    () => {
      res.status(201).json({
        message: 'Picture updated successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.deletePicture = (req, res, next) => {
  Picture.deleteOne({_id: req.params.id}).then(
    () => {
      res.status(200).json({
        message: 'Deleted!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.getAllPicture = (req, res, next) => {
  Picture.find().then(
    (pictures) => {
      res.status(200).json(pictures);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};