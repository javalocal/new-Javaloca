const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    jenis: {
        type: String,
        required: true
    },
    gambar: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    lok: {
        type: String,
        required: true
    },
    lokasi: {
        type: String,
        required: true
    },
    harga: {
        type: Number,
        required: true
    },
    bintang: {
        type: String,
        required: true
    },
    kode: {
        type:String,
        require:true
    },


});

module.exports = mongoose.model('Akomodasi', productSchema, 'Akomodasi')