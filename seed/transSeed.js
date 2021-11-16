const mongoose = require('mongoose');
const akomodasi = require('../models/akomodasi');

const Akomodasi = require('../models/akomodasi')

mongoose.connect(('mongodb+srv://admin:12345@javaloca.wdxsx.mongodb.net/javaloca?retryWrites=true&w=majority'), (err, res) => {
    if (err) {
        console.error(err);
    }
    else {
        console.log('Database terhubung untuk proses seeding!')
    }
})

const products = [
    new Akomodasi({
        jenis: 'hotel',
        gambar: '/img/hotel_1.jpeg',
        name: 'Four Points by Sheraton Surabaya Pakuwon Indah',
        lok: 'surabaya',
        lokasi: ' Pakuwon Mall, Jalan Puncak Indah Lontar No. 2, Wiyung, Surabaya, Jawa Timur',
        kamar1: 'Deluxe',
        kamar2: 'Junior Suite',
        gambar1: '/img/kamar_1.jpeg',
        gambar2: '/img/kamar_2.jpeg',
        harga1: 900000,
        harga2: 1100000,
        bintang: "4",
        kode: "sby1",
    }),
  
    
]

var done = 0;
for (var i = 0; i < products.length; i++) {
    console.log(products[i]);
    products[i].save((err, res) => {
        done++;
        if(done == akomodasi.length) {
            console.log('Berhasil tersimpan!');
            exit();
        }
    })
}

function exit() {
    mongoose.disconnect();
}