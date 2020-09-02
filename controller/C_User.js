const User = require('./../models/user.model');
module.exports.allUsers = async (request, response, next) => {
    try {
        const users = await User.find({},{name:1});
        response.send({success: true, users: users});
    } catch (error) {
        console.log(error);
        response.send({success: false, message: error.message});
    }
}
module.exports.userDetails = async (request, response, next) => {
    try {
        const userId = request.params.id;
        const user = await User.findById(userId);
        response.send({success: true, users: user});
    } catch (error) {
        response.send({success: false, message: error.message});
    }
}