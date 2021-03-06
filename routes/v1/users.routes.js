var express = require('express');
var router = express.Router();
const UserController = require('../../controller/C_User');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/get-users', UserController.allUsers );
router.get('/get-user-details/:id', UserController.userDetails );

module.exports = router;
