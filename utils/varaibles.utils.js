module.exports.JWT_AUTH_KEY = 'THIS_IS_A_KEY_IT_SHOULD_BE_LONG';
module.exports.JWT_VALIDITY = '7d';
module.exports.JWT_OPTIONS = {
    expiresIn: this.JWT_VALIDITY
}
module.exports.MONGOOSE_URL = 'mongodb://localhost:27017/task';