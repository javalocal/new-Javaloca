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
        name: 'Garuda',
        from: 'jakarta',
        to: 'surabaya',
        waktu: '11:00 - 12:30', 
        date: '10/11/2021',
        price : 500000   
    }),
    new Transport({
        name: 'Lion',
        from: 'jakarta',
        to: 'surabaya',
        waktu: '12:00 - 13:30', 
        date: '10/11/2021',
        price : 400000   
    }),
    new Transport({
        name: 'Sriwijaya',
        from: 'jakarta',
        to: 'surabaya',
        waktu: '10:00 - 11:30', 
        date: '10/11/2021',
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