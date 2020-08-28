const express = require('express');
const router = express.Router();
const passportAuthMiddleware = require('./../middlewares/passport.middleware');
const taskController = require('./../controller/task.controller');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/create-task', passportAuthMiddleware );
router.put('/update-task', passportAuthMiddleware );
router.delete('/delete-task', passportAuthMiddleware );

// read operations
router.get('/get-task-by-id/:id', passportAuthMiddleware);
router.get('/get-task-by-assignedTo-id/:id', passportAuthMiddleware);
router.get('/get-task-by-assignedBy-id/:id', passportAuthMiddleware);
router.get('/get-task-by-createdBy-id/:id', passportAuthMiddleware);
router.get('/get-task-by-title/:title', passportAuthMiddleware);

module.exports = router;
