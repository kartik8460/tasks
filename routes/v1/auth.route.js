var express = require('express');
var router = express.Router();
const AuthController = require('./../../controller/C_Auth');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ROUTE' });
});

router.post('/register', AuthController.register);
router.post('/login', AuthController.login);

module.exports = router;
