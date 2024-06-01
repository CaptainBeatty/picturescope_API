const Picture = require('../models/pictures');

exports.createPicture = (req, res, next) => {
  delete req.body._id;
  const pictures = new Picture({
	...req.body
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
    _id: req.params.id,
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
  const userId = req.body.userId;

  Picture.findById(req.params.id)
    .then((picture) => {
      if (!picture) {
        return res.status(404).json({ message: 'Picture not found!' });
      }

      if (picture.userId.toString() !== userId) {
        return res.status(403).json({ message: 'Unauthorized to update this picture' });
      }

      const updatedData = {
        title: req.body.title,
        url: req.body.url,
        description: req.body.description,
        device: req.body.device,
      };

      Picture.updateOne({ _id: req.params.id }, updatedData)
        .then(() => {
          res.status(200).json({ message: 'Picture updated successfully!' });
        })
        .catch((error) => {
          res.status(400).json({ error: error });
        });
    })
    .catch((error) => {
      res.status(500).json({ error: error });
    });
};

// exports.modifyPicture = (req, res, next) => {
// //   Picture.updateOne({_id: req.params.id}, { ...req.body, _id: req.params.id})
// //   .then(
// //     () => {
// //       res.status(201).json({
// //         message: 'Picture updated successfully!'
// //       });
// //     }
// //   ).catch(
// //     (error) => {
// //       res.status(400).json({
// //         error: error
// //       });
// //     }
// //   );
// // };

// const pictures = new Picture({
//     _id: req.params.id,
//     title: req.body.title,
// 	url: req.body.url,
//     description: req.body.description,
//     device: req.body.device,
//   });

  
//   Picture.updateOne({_id: req.params.id}, pictures).then(
//     () => {
//       res.status(201).json({
//         message: 'Picture updated successfully!'
//       });
//     }
//   ).catch(
//     (error) => {
//       res.status(400).json({
//         error: error
//       });
//     }
//   );
// };


// exports.deletePicture = (req, res, next) => {
  
	
//   Picture.deleteOne({_id: req.params.id}).then(
//     () => {
//       res.status(200).json({
//         message: 'Deleted!'
//       });
//     }
//   ).catch(
//     (error) => {
//       res.status(400).json({
//         error: error
//       });
//     }
//   );
// };

// exports.deletePicture = (req, res, next) => {
//   const userId = req.body.userId;

//   Picture.findOne(req.params.id)
//     .then((pictures) => {
//       if (!pictures) {
//         return res.status(404).json({ message: 'Picture not found!' });
//       }

//       if (pictures.userId.toString() !== userId) {
//         return res.status(403).json({ message: 'Unauthorized to delete this picture' });
//       }

//       Picture.deleteOne({ _id: req.params.id })
//         .then(() => {
//           res.status(200).json({ message: 'Picture deleted successfully!' });
//         })
//         .catch((error) => {
//           res.status(400).json({ error: error });
//         });
//     })
//     .catch((error) => {
//       res.status(500).json({ error: error });
//     });
// };

exports.deletePicture = (req, res, next) => {
  const userId = req.userId; // Récupère userId depuis le middleware d'authentification

  Picture.findOne({ _id: req.params.id }) // Utilisation correcte de findOne avec un objet de filtre
    .then((picture) => {
      if (!picture) {
        return res.status(404).json({ message: 'Picture not found!' });
      }

      if (picture.userId.toString() !== userId) {
        return res.status(403).json({ message: 'Unauthorized to delete this picture' });
      }

      Picture.deleteOne({ _id: req.params.id })
        .then(() => {
          res.status(200).json({ message: 'Picture deleted successfully!' });
        })
        .catch((error) => {
          res.status(400).json({ error: error });
        });
    })
    .catch((error) => {
      res.status(500).json({ error: error });
    });
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