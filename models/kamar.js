const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    kode: {
        type: String,
        required: true
    },
    kamar: {
        type: String,
        required: true
    },
    gambar: {
        type: String,
        required: true
    },
    harga: {
        type: Number,
        required: true
    },


});

module.exports = mongoose.model('Kamar', productSchema, 'kamar')