var express = require('express');
var router = express.Router();
const authController = require('./../controller/auth.controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ROUTE' });
});

router.post('/register', authController.register);
router.post('/login', authController.login);

module.exports = router;
