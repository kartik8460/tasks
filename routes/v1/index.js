const express = require('express');
const router = express.Router();
const authRoutes = require('./auth.route');
const userRoutes = require('./users.route');
const tasksRoutes = require('./tasks.route');

router.use('/auth', authRoutes);
router.use('/user', userRoutes);
router.use('/task', tasksRoutes);

module.exports = router