const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {

  if (req.method === 'GET') {
    // Autoriser les requêtes GET sans token
    return next();
  }
   
    try {
      const token = req.headers.authorization.split(' ')[1];
      const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
      req.userId = decodedToken.userId; // Ajoute userId à la requête
      next();
    } catch (error) {
      res.status(401).json({ error });
    }
 
  

};