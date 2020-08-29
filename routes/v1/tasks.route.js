const express = require('express');
const router = express.Router();
const passportAuthMiddleware = require('./../../middlewares/passport.middleware');
const TaskController = require('./../../controller/C_Task');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/create-task', passportAuthMiddleware, TaskController.createTask);
router.put('/update-task', passportAuthMiddleware, TaskController.updateTask);
router.delete('/delete-task', passportAuthMiddleware, TaskController.deleteTask);

// Read Operations
router.get('/get-task-by-id/:id', passportAuthMiddleware, TaskController.getTaskByID);
router.get('/get-task-by-assignedTo-id/:id', passportAuthMiddleware, TaskController.getTaskByAssignedToID);
router.get('/get-task-by-assignedBy-id/:id', passportAuthMiddleware, TaskController.getTaskByAssignedByID);
router.get('/get-task-by-createdBy-id/:id', passportAuthMiddleware, TaskController.getTaskByCREATEDByID);
router.get('/get-task-by-title/:title', passportAuthMiddleware, TaskController.getTaskByTitle);

module.exports = router;
