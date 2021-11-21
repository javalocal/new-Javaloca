const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    account: {
        type: String,
        required: true
    },
    lokasi: {
        type: String,
        required: true
    },
    tanggalNew: {
        type: String,
        required: true
    },
    jenis: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    kelas: {
        type: String,
        required: true
    },
    asal: {
        type: String,
        required: true
    },
    tujuan: {
        type: String,
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
    tanggal: {
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
    kode: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    bagasi: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('voucher_trans', productSchema, 'voucher_trans');