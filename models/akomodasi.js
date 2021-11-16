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
    kamar1: {
        type: String,
        required: true
    },
    kamar2: {
        type: String,
        required: true
    },
    gambar1: {
        type: String,
        required: true
    },
    gambar2: {
        type: String,
        required: true
    },
    harga1: {
        type: Number,
        required: true
    },
    harga2: {
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