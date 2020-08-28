const jwt = require('jsonwebtoken')
const jwtExpiresIn = require('./varaibles.utils').JWT_VALIDITY;
const KEY = require('./varaibles.utils').JWT_AUTH_KEY;
const jwtOptions = require('./varaibles.utils').JWT_OPTIONS;

module.exports.createJWTTokken = async (user) => {
    try {
        const payload = {
            userId: user._id,
            expiresIn: jwtExpiresIn
        }
        const signedTokken = await jwt.sign(payload, KEY, jwtOptions);
        return {
            token: `Bearer ${signedTokken}`,
            expiresIn: jwtExpiresIn
        }
    } catch (error) {
        return false ;
    }
}