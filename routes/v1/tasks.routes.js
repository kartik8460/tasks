const express = require("express");
const router = express.Router();
const passportAuthMiddleware = require("../../middlewares/passport.middleware");
const multerMiddleware = require("./../../middlewares/multer.middleware");
const TaskController = require("../../controller/C_Task");
/* GET users listing. */
router.get("/", function (req, res, next) {
    res.send("respond with a resource");
});

// router.post('/create-task', passportAuthMiddleware, TaskController.createTask);
// router.put('/update-task/:id', passportAuthMiddleware, TaskController.updateTask);
// router.delete('/delete-task/:id', passportAuthMiddleware, TaskController.deleteTask);

// // Add Assets
// router.post('/add-assets/', passportAuthMiddleware, multerMiddleware.single('asset'), TaskController.addAssets);

// // Read Operations
// router.get('/get-task-by-id/:id', passportAuthMiddleware, TaskController.getTaskByID);
// router.get('/get-task-by-assignedTo-id/:id', passportAuthMiddleware, TaskController.getTaskByAssignedToID);
// router.get('/get-task-by-assignedBy-id/:id', passportAuthMiddleware, TaskController.getTaskByAssignedByID);
// router.get('/get-task-by-createdBy-id/:id', passportAuthMiddleware, TaskController.getTaskByCreatedByID);
// router.get('/get-task-by-title/:title', passportAuthMiddleware, TaskController.getTaskByTitle);

// Without Auth Routes
router.post("/create-task", TaskController.createTask);
router.put("/update-task/:id", TaskController.updateTask);
router.delete("/delete-task/:id", TaskController.deleteTask);

// Add Assets
router.post(
    "/add-assets/",
    multerMiddleware.single("asset"),
    TaskController.addAssets
);

// Read Operations
router.get("/task-list", TaskController.getAllTasks);
router.get("/get-task-by-id/:id", TaskController.getTaskByID);
router.get(
    "/get-task-by-assignedTo-id/:id",
    TaskController.getTaskByAssignedToID
);
router.get(
    "/get-task-by-assignedBy-id/:id",
    TaskController.getTaskByAssignedByID
);
router.get(
    "/get-task-by-createdBy-id/:id",
    TaskController.getTaskByCreatedByID
);
router.get("/get-task-by-title/:title", TaskController.getTaskByTitle);

module.exports = router;
