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
        gambar: '/img/hotel_2.jpeg',
        name: 'Vasa Hotel Surabaya ',
        lok: 'surabaya',
        lokasi: ' Jalan HR Muhammad No 31, Sukomanunggal, Surabaya, Jawa Timur',
        harga: 889350,
        bintang: "5",
        kode: "sby4",
    }),
    new Akomodasi({
        jenis: 'hotel',
        gambar: '/img/hotel_3.jpeg',
        name: 'Grand darmo Surabaya ',
        lok: 'surabaya',
        lokasi: ' Jl. Progo ,Wonokromo, Surabaya, Jawa Timur',
        harga: 480000,
        bintang: "4",
        kode: "sby5",
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