const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const passportAuthMiddleware = require('../middlewares/passport.middleware');
const jwtTokenIssuer = require('../utils/jwt.utils').createJWTTokken;
const crypto = require('crypto');
const ResetPassword = require('./../models/resetPassword.model');

const passwordHash = async (password) => {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
}

exports.register = async (request, response, next) => {
    try {
        const name = request.body.name;
        const email = request.body.email;
        const password = request.body.password;
        
        const hash = await passwordHash(password);

        const newUser = {
            name: name,
            password: hash,
            email: email
        }
        const user = await User.create(newUser);
        response.status(201).send({success: true, message:'Successfully Registered', id: user._id, email: user.email});

    } catch (error) {
        response.send({success: false, message: error.message});
    }
    
}

exports.login = async (request, response, next) => {
    try {
        const email = request.body.email;
        const password = request.body.password;

        let user = await User.findOne({email: email});

        if(!user) throw new Error('User Not Found');
        
        let passwordMatch = await bcrypt.compare(password, user.password);
        if(!passwordMatch) throw new Error('Invalid password or email id');
        
        let tokenObj = await jwtTokenIssuer(user);
        if(!tokenObj) throw new Error('Unable to create Tokken');
        tokenObj.success = true;
        response.status(200).send(tokenObj);
    } catch (error) {
        response.status(400).send({success: false, message: error.message});
    }
}

exports.resetPasswordRequest = async (request, response, next) => {
    try {
        const email = request.body.email;
        if(!email) {
            throw new Error('Please provide email address associated to your');
        }
        
        const user = await User.findOne({email: email});
        if(!user) {
            throw new Error('Accoount Not Found')
        }
        let token = await crypto.randomBytes(32).toString('hex');

        await ResetPassword.create({token: token, userId: user._id});
        request.resetPasswordData ={
            url: `http://localhost:3000/api/v1/auth/reset-password/${token}`,
            email: user.email,
            userName: user.name
        } 
        next();
    } catch (error) {
        response.send({success: false, message: error.message});
    }
    
};

exports.resetPassword = async (request, response, next) => {
    try {

        const tokenQuery = await ResetPassword.findOne({token: request.params.token});

        if(!tokenQuery) throw new Error("Invalid Url");

        const hash = await passwordHash(request.body.password);

        const updatedData = await User.updateOne({_id: tokenQuery.userId}, {password: hash});
        
        response.send({success: true, message: 'Password Reset Successfully'});

    } catch (error) {
        response.send({success: false, message: error.message});
    }
}