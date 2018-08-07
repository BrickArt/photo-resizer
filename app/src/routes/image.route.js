module.exports = {
    uploadImage
};

function uploadImage(req, res, next) {
    console.log(req.files)
    console.log(req.body)
}