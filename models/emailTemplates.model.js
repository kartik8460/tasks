const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const EmailTemplates = new Schema({
    template: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('email-templates', EmailTemplates);