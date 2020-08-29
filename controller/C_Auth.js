const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const passportAuthMiddleware = require('../middlewares/passport.middleware');
const jwtTokenIssuer = require('../utils/jwt.utils').createJWTTokken;

module.exports.register = async (request, response, next) => {
    try {
        const name = request.body.name;
        const email = request.body.email;
        const password = request.body.password;
        const saltRounds = 10;
        if(!request.body.name || !request.body.email || !request.body.password) {
            throw new Error('Provide all Credentials');
        }
        
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
