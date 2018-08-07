const mongoose = require("mongoose");
const Schema = mongoose.Schema;


var schema = new Schema({
    img_url: {
        type: String,
        unique: true,
        required: true
    },
    img_name: {
        type: String,
        required: true
    },
    width: {
        type: String,
        required: true
    },
    height: {
        type: String,
        required: true
    },
    user_id: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now()
    },
    resizes: [
        {
            img_url: {
                type: String,
                unique: true,
                required: true
            },
            width: {
                type: String,
                required: true
            },
            height: {
                type: String,
                required: true
            },
            date: {
                type: Date,
                default: Date.now()
            }
        }
    ]
    
});


module.exports = {
    Image: mongoose.model('Image', schema)
};