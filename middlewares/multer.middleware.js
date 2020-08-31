const multer = require('multer');
const MIME_TYPES = ['image/jpg', 'image/png', 'application/pdf'];
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'assets');
    },
    filename: (req, file, callback) => {
        let filename = file.originalname.split(' ').join('-');
        filename = filename.split('.');
        const fileExtension = filename.pop();
        filename = (`${filename.join('-')}-${Date.now()}.${fileExtension}`).toLowerCase();
        callback(null, filename);
    }
})
const fileFilterCB = (req, file, callback) => {
    console.log(file.mimetype);
    if(MIME_TYPES.includes(file.mimetype)) {
        return callback(null, true);
    }
    callback(new Error('Please upload Valid File Type'));
}
module.exports = multer({storage: storage, fileFilter: fileFilterCB});