const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    gambar: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    },
    class: {
        type: String,
        required: true
    },
    waktu_from: {
        type: String,
        required: true
    },
    waktu_to: {
        type: String,
        required: true
    },
    waktu: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    bagasi: {
        type: String,
        required: true
    },
    kode: {
        type: String,
        required: true
    },
    ter_from: {
        type: String,
        required: true
    },
    ter_to: {
        type: String,
        required: true
    },
    pesawat: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required:true
    }
});

module.exports = mongoose.model('transport', productSchema, 'Transport')