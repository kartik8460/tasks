const Task = require('../models/task.model');
const { response, request } = require('express');

module.exports.createTask = async (request, response, next) => {
    try {
        const creatorId = request.user.userId;
        const newTask ={
            title:request.body.title, 
            description: request.body.description,
            assets: request.body.assets,
            assigned_by: request.body.assigned_by,
            assigned_to: request.body.assigned_to,
            created_by: creatorId
        };

        const addedTask = await Task.create(newTask);
        
        response.send({success: true, task: addedTask});
    } catch (error) {
        response.send({success: false, message: error.message});
    }
}

// Add Assets
module.exports.addAssets = async (request, response, next) => {
    try {
        const filePath = `${request.protocol}://${request.get("host")}/static-files/asset/${request.file.filename}`;
        const taskId = request.body.taskId;
        let updatedTask = await Task.findByIdAndUpdate(taskId, {$push:{assets: filePath}}, {new: true});
        response.send({success: true, updatedTask: updatedTask});
    } catch (error) {
        response.send({success: false, message: error.message});
    }
}

module.exports.updateTask = async (request, response, next) => {
    try {
        const taskId = request.params.id
        const task = await Task.findOne({_id: taskId});
        if (!task.created_by === request.user.userId) throw new Error('Not Authorized to Edit Task')
        const updateTask = {
            title:request.body.title, 
            description: request.body.description,
            assets: request.body.assets,
            assigned_by: request.body.assigned_by,
            assigned_to: request.body.assigned_to,
        };
    
        const addedTask = await Task.updateOne({_id: taskId},updateTask);
        
        response.send({success: true, task: addedTask});
    } catch (error) {
        response.send({success: false, message: error.message});
    }
}

module.exports.deleteTask = (request, response, next) => {
    
}

// Read Operations
module.exports.getTaskByID = async (request, response, next) => {
    try {
        const taskId = request.params.id;
        const task = await Task.findById(taskId);
        if(!task) throw new Error('Task Not Found');
        response.send({success: true, task: task});
    } catch (error) {
        response.send({success: false, message: error.message});
    }
}

module.exports.getTaskByAssignedToID = async (request, response, next) => {
    try {
        const assignedToID = request.params.id;
        const task = await Task.find({assigned_to: assignedToID});
        if(task.length <= 0) throw new Error('Task Not Found');
        response.send({success: true, task: task});
    } catch (error) {
        response.send({success: false, message: error.message});
    }
}

module.exports.getTaskByAssignedByID = async (request, response, next) => {
    try {
        const assignedByID = request.params.id;
        const task = await Task.find({assigned_by: assignedByID });
        if(task.length <= 0) throw new Error('Task Not Found');
        response.send({success: true, task: task});
    } catch (error) {
        response.send({success: false, message: error.message});
    }
}

module.exports.getTaskByCreatedByID = async (request, response, next) => {
    try {
        const createdByID = request.params.id;
        const task = await Task.find({created_by: createdByID});
        if(task.length <= 0) throw new Error('Task Not Found');
        response.send({success: true, task: task});
    } catch (error) {
        response.send({success: false, message: error.message});
    }
}

module.exports.getTaskByTitle = async (request, response, next) => {
    try {
        const taskTitle = request.params.id;
        const task = await Task.find({title: taskTitle});
        if(task.length <= 0) throw new Error('Task Not Found');
        response.send({success: true, task: task});
    } catch (error) {
        response.send({success: false, message: error.message});
    }
}