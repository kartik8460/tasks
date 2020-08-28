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
	Assigned_by: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
	Assignted_to: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
	Created_by: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
},{
    timestamps: true
});
module.exports = mongoose.model('Task', TaskSchema);