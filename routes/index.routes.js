const express = require('express');
const router = express.Router();
const v1Routes = require('./v1/v1.routes');
const EmailTemplateController = require('./../controller/C_Email_Template');
const { route } = require('./v1/v1.routes');
router.post('/insert-template', EmailTemplateController.insertTemplate);
router.get('/get-template/:type', EmailTemplateController.getTemplate)
router.use('/v1', v1Routes);

module.exports = router;