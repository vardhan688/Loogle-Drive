const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const FileSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    mimetype: {
        type: String
    },
    size: {
        type: Number
    }
});

const File = mongoose.model('file', FileSchema);
module.exports = File;