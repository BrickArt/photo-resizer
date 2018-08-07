const sharp = require("sharp");

module.exports = {
    resizeImage$
};

async function resizeImage$({ image, width, height }) {
    const buffer = await sharp(image).resize(width, height).toBuffer();
    return buffer;
};