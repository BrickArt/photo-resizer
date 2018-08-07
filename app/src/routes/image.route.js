const imageController = require("../controllers/image.controller");

module.exports = {
    uploadImage$,
    getResized$
};

async function uploadImage$(req, res, next) {
    const files = req.files;

    const result = await imageController.uploadImage$({ files });
    res.status(201).json(result);
}

async function getResized$(req, res, next) {
    const userId = req._userId;
    const { image_id, width, height } = req.query;
    const result = await imageController.getResizedImage$({ id: image_id, userId, params: { width, height } });

    res.status(200).send(result);
}