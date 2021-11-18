const express = require('express')
const router = express.Router()
const akomodasi = require('../models/akomodasi')
const kamar = require('../models/kamar');
const conf = require('../models/conhotel');
const book = new conf();

Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

function datestring(today){
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    return today = dd + '-' + mm + '-' + yyyy;
}

router.get(('/hotel'), (req, res) => {
    res.render('pages/Hotelbooking')
})

router.get(('/villa'), (req, res) => {
    res.render('pages/Villa')
})

router.post(('/hotel-results'), async(req,res) => {
const location =req.body.location;
var malam = req.body.malam;
const date = req.body.checkin;
var date_=new Date(date);
const cekout=date_.addDays(parseInt(malam));
book.bookinginfo((parseInt(malam)),(datestring(date_)),(datestring(cekout)));
console.log(book.checkin);

var data = await akomodasi.find({lok:location, jenis:"Hotel"});
var kmr = await kamar.find();
    res.render('pages/Hotel_hasil', {akomodasi: data, kamar:kmr});

})

router.post(('/villa-results'), async(req,res) => {
    const location =req.body.location;
    var malam = req.body.malam;
    const date = req.body.checkin;
    var date_=new Date(date);
    const cekout=date_.addDays(parseInt(malam));
    book.bookinginfo((parseInt(malam)),(datestring(date_)),(datestring(cekout)));
    console.log(book.checkin);
    const search = {lok:location,jenis:"Villa"}
    var data = await akomodasi.find(search);
        res.render('pages/Villa_hasil', {akomodasi: data});
    
    })

router.get(('/confirmation/:id'), async(req,res) =>{
const akomodasiid= req.params.id;
var kode;
const data = await kamar.find({_id:akomodasiid});
await data.forEach((kamar) => {
book.bookkamar(kamar.kamar,kamar.harga);
kode= kamar.kode; 
})
const hotel =await akomodasi.find({kode:kode});
await hotel.forEach((akomodasi)=>{
    book.booking(akomodasi.name,akomodasi.lokasi,akomodasi.jenis);
})
var jumlah = (parseInt(book.lama)*parseInt(book.harga));
var data_book = book.createArray();
console.log(jumlah);
res.render('pages/Hotel_resoult1',{data:book.createArray(), jum:jumlah});
})


module.exports = router;