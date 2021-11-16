const mongoose = require('mongoose');
const kamar = require('../models/kamar');

const Kamar = require('../models/kamar')

mongoose.connect(('mongodb+srv://admin:12345@javaloca.wdxsx.mongodb.net/javaloca?retryWrites=true&w=majority'), (err, res) => {
    if (err) {
        console.error(err);
    }
    else {
        console.log('Database terhubung untuk proses seeding!')
    }
})

const products = [
    new Kamar({
        kode: 'sby1',
        kamar: 'Deluxe Suite',
        gambar: '/img/kamar_1.jpeg',
        harga: '900000',

    }),
    new Kamar({
        kode: 'sby1',
        kamar: 'Junior Suite',
        gambar: '/img/kamar_2.jpeg',
        harga: '1200000',

    }),
  
    
]

var done = 0;
for (var i = 0; i < products.length; i++) {
    console.log(products[i]);
    products[i].save((err, res) => {
        done++;
        console.log("ok");
        if(done == kamar.length) {
            console.log('Berhasil tersimpan!');
            exit();
        }
    })
}

function exit() {
    mongoose.disconnect();
}