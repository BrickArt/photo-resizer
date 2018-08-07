const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');

const CLOUD_NAME = "djteikzzv";
const CLOUD_KEY = "158493468446294";
const CLOUD_SECRET = "OloqNruKxT4OeiVmlXVHDhM3XMo";

cloudinary.config({
    cloud_name: CLOUD_NAME,
    api_key: CLOUD_KEY,
    api_secret: CLOUD_SECRET
})


const storage = cloudinaryStorage({
    cloudinary: cloudinary,
    folder: 'users',
    allowedFormats: ['jpg', 'png'],
    params: {
        angle: "exif"
    },
    filename: function (req, file, cb) {
        var fileName = 'house_' + Date.now();
        cb(undefined, fileName);
    }
});

module.exports = {
    storage
}