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
        jenis: 'villa',
        gambar: '/img/villa_1.jpeg',
        name: 'Comfy House near Airport',
        lok: 'surabaya',
        lokasi: ' Jalan Haji Syukur VII, Perumahan Airport Village No.A10, Sedati , Sedati, Surabaya, Jawa Timur',
        harga: 950000,
        bintang: "4",
        kode: "sby2",
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