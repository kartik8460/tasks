const mongoose = require('mongoose');
const MONGOOSE_URL = require('./../utils/varaibles.utils').MONGOOSE_URL;

const mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    urlencoded: true
};

module.exports = async () => {
    try {
        await mongoose.connect(MONGOOSE_URL, mongooseOptions);
    } catch (error) {
        console.log(error);
    }
}