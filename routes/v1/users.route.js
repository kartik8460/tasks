var express = require('express');
var router = express.Router();
const UserController = require('./../../controller/C_User');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/get-user-details', );

module.exports = router;
