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
        gambar: '/img/KAI.png',
        name: 'KA. Bima',
        from: 'jakarta',
        to: 'surabaya',
        class : 'Executive',
        waktu_from : '17:00',
        waktu_to : '04:36',
        waktu: '11H 36M', 
        date: '2021-11-16',
        kode : 'BA001',
        ter_from : 'Gambir jakarta',
        ter_to : 'Surabaya Gubeng',
        traincode : 'BDG',
        price : 470000   
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