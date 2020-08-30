const passport = require('passport');
const User = require('../models/user.model');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const KEY = require('../utils/varaibles.utils').JWT_AUTH_KEY;

const JWTOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: KEY
}
passport.use(new JWTStrategy(JWTOptions, async (payload, cb) => {
    try {
        let user = await User.findOne({_id: payload.userId});

        if(!user) return cb(null, false);
        
        const userObj = {
            userId: user._id,
            name: user.name
        }

        return cb(null, userObj);
    } catch (error) {
        cb(error, false);
    }
}));

module.exports = passport.authenticate('jwt', {session: false});