const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TaskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
	description: {
        type: String
    },
	assets: {
        type: Array
    },
	assigned_by: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
	assigned_to: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
	created_by: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
},{
    timestamps: true
});
module.exports = mongoose.model('Task', TaskSchema);