const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const passportAuthMiddleware = require('../middlewares/passport.middleware');
const jwtTokenIssuer = require('../utils/jwt.utils').createJWTTokken;
const crypto = require('crypto');
const ResetPassword = require('./../models/resetPassword.model');

module.exports.register = async (request, response, next) => {
    try {
        if(!request.body.name || !request.body.email || !request.body.password) {
            throw new Error('Provide all Credentials');
        }
        const name = request.body.name;
        const email = request.body.email;
        const password = request.body.password;
        const saltRounds = 10;
        
        const hash = await bcrypt.hash(password, saltRounds);
        const newUser = {
            name: name,
            password: hash,
            email: email
        }
        const user = await User.create(newUser);
        response.send({success: true, message:'Successfully Registered', id: user._id, email: user.email});

    } catch (error) {
        console.log(error);
        response.send({success: false, message: error.message});
    }
    
}

module.exports.login = async (request, response, next) => {
    try {
        console.log(request.body.email, request.body.password);
        const email = request.body.email;
        const password = request.body.password;

        let user = await User.findOne({email:email});
        if(!user) throw new Error('User Not Found');

        let tokenObj = await jwtTokenIssuer(user);
        if(!tokenObj) throw new Error('Unable to create Tokken');

        response.send(tokenObj);
    } catch (error) {
        response.send({success: false, message: error.message});
    }
}

module.exports.resetPasswordRequest = async (request, response, next) => {
    try {
        if(!request.body.email) {
            throw new Error('Please provide email address associated to your');
        }
        const email = request.body.email;
        
        const user = await User.findOne({email: email});
        if(!user) {
            throw new Error('Accoount Not Found')
        }
        let token = await crypto.randomBytes(32).toString('hex');
        await ResetPassword.create({token: token});
        const url = `http://localhost:3000/api/v1/auth/reset-password/${token}`;
        console.log(url);
        next();
    } catch (error) {
        response.send({success: false, message: error.message});
    }
    
};

module.exports.resetPassword = async (request, response, next) => {
    try {
        const token = request.params.token
        
        const tokenQuery = ResetPassword.find({token: token});
        
    } catch (error) {
        response.send({success: false, message: error.message});
    }
    
}