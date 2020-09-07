var express = require('express');
var router = express.Router();
const AuthController = require('../../controller/C_Auth');
const nodemialer = require('./../../middlewares/nodemailer.middleware');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ROUTE' });
});

router.post('/register', AuthController.register);
router.post('/login', AuthController.login);
router.post('/reset-password-request', AuthController.resetPasswordRequest, nodemialer);
router.post('/reset-password/:token', AuthController.resetPassword, nodemialer);

module.exports = router;
