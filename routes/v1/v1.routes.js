const express = require('express');
const router = express.Router();
const v1AuthRoutes = require('./auth.routes');
const v1UserRoutes = require('./users.routes');
const v1TasksRoutes = require('./tasks.routes');

router.use('/auth', v1AuthRoutes);
router.use('/user', v1UserRoutes);
router.use('/task', v1TasksRoutes);

module.exports = router;