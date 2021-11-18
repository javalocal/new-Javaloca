const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    jenis: {
        type: String,
        required: true
    },
    akomodasi: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    alamat_akomo: {
        type: String,
        required: true
    },
    alamat_account: {
        type: String,
        required: true
    },
    checkin: {
        type: String,
        required: true
    },
    checkout: {
        type: String,
        required: true
    },
    lama: {
        type: String,
        required: true
    },
    tanggal: {
        type: String,
        required: true
    },
    


});

module.exports = mongoose.model('voucher_acomo', productSchema, 'voucher_acomo')