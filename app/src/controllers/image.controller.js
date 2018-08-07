const imageModel = require("../models/image.model");
const requestService = require("../services/request.service");
const resizeService = require("../services/resize.service");

module.exports = {
    uploadImage$,
    getResizedImage$
};

async function uploadImage$({ files, userId }) {
    const response = []
    await files.forEach(async img => {
        const result = new imageModel.Image(imageFabric(img, userId));
        await result.save();
        return response.push(result);
    });
    return response;
}

async function getResizedImage$({ id, userId, params }) {
    const imgData = await imageModel.Image.findById(id);

    const image = await requestService.get$(imgData.img_url);

    const result = await resizeService.resizeImage$({ image, ...params });

    imgData.resizes = [ ...imgData.resizes, { ...params, date: Date.now() }];
    await imgData.save();

    return result
}

function imageFabric(img, userId) {
    return {
        img_url: img.url,
        img_name: img.name,
        width: img.width,
        height: img.height,
        user_id: userId
    }

}

