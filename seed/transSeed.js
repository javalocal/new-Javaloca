const mongoose = require('mongoose');
const transport = require('../models/transport');

const Transport = require('../models/transport')

mongoose.connect(('mongodb+srv://admin:12345@javaloca.wdxsx.mongodb.net/javaloca?retryWrites=true&w=majority'), (err, res) => {
    if (err) {
        console.error(err);
    }
    else {
        console.log('Database terhubung untuk proses seeding!')
    }
})

const products = [
    new Transport({
        gambar: '/img/lion.png',
        name: 'Lion',
        from: 'jakarta',
        to: 'surabaya',
        class : 'Economy',
        waktu_from : '13:30',
        waktu_to : '15:00',
        waktu: '1H 30M', 
        date: '2021-11-16',
        bagasi : '20KG',
        kode : 'JT100',
        ter_from : 'Soekarno-Hata International Airport',
        ter_to : 'Juanda Airport',
        pesawat : 'Boeing 737',
        price : 400000   
    }),
    new Transport({
        gambar: '/img/citilink.png',
        name: 'Citilink',
        from: 'jakarta',
        to: 'surabaya',
        class : 'Economy',
        waktu_from : '14:00',
        waktu_to : '15:30',
        waktu: '1H 30M', 
        date: '2021-11-16',
        bagasi : '20KG',
        kode : 'QG200',
        ter_from : 'Soekarno-Hata International Airport',
        ter_to : 'Juanda Airport',
        pesawat : 'Airbus 320',
        price : 480000   
    }),
    new Transport({
        gambar: '/img/garuda.png',
        name: 'Garuda Indonesia',
        from: 'jakarta',
        to: 'surabaya',
        class : 'Economy',
        waktu_from : '07:30',
        waktu_to : '09:00',
        waktu: '1H 30M', 
        date: '2021-11-16',
        bagasi : '20KG',
        kode : 'GA204',
        ter_from : 'Soekarno-Hata International Airport',
        ter_to : 'Juanda Airport',
        pesawat : 'Boeing 737',
        price : 650000   
    }),
    new Transport({
        gambar: '/img/batik.png',
        name: 'Batik Air',
        from: 'jakarta',
        to: 'surabaya',
        class : 'Economy',
        waktu_from : '13:30',
        waktu_to : '15:00',
        waktu: '1H 30M', 
        date: '2021-11-16',
        bagasi : '20KG',
        kode : 'BTK310',
        ter_from : 'Soekarno-Hata International Airport',
        ter_to : 'Juanda Airport',
        pesawat : 'Airbus 320',
        price : 550000   
    }),
    new Transport({
        gambar: '/img/sriwijaya.png',
        name: 'Sriwijaya',
        from: 'jakarta',
        to: 'surabaya',
        class : 'Economy',
        waktu_from : '13:30',
        waktu_to : '15:00',
        waktu: '1H 30M', 
        date: '2021-11-16',
        bagasi : '20kg',
        kode : 'SJ180',
        ter_from : 'Soekarno-Hata International Airport',
        ter_to : 'Juanda Airport',
        pesawat : 'Boeing 737',
        price : 450000   
    }),
]

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save((err, res) => {
        done++;
        if(done == transport.length) {
            console.log('Berhasil tersimpan!');
            exit();
        }
    })
}

function exit() {
    mongoose.disconnect();
}