const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const resetPassword = new Schema({
    token: {
        type: String,
        required: true
    },
});
module.exports = mongoose.model('resetPassword', resetPassword);