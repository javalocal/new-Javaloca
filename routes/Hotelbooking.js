const express = require('express')
const router = express.Router()
const akomodasi = require('../models/akomodasi')
const kamar = require('../models/kamar');


router.get(('/hotel'), (req, res) => {
    res.render('pages/Hotelbooking')
})

router.get(('/villa'), (req, res) => {
    res.render('pages/Villa')
})

router.post(('/hotel-results'), async(req,res) => {
const location =req.body.location;
const checkin = req.body.checkin;
const malam = req.body.malam;
var data = await akomodasi.find({lok:location});
var kmr = await kamar.find()
console.log(kmr);
console.log(data)
    res.render('pages/Hotel_hasil', {akomodasi: data, kamar:kmr});

})

router.post(('/villa-results'), async(req,res) => {
    const location =req.body.location;
    const checkin = req.body.checkin;
    const malam = req.body.malam;
    const search = {lok:location,jenis:"villa"}
    var data = await akomodasi.find(search);
    
    
    console.log(data)
        res.render('pages/Villa_hasil', {akomodasi: data});
    
    })

router.get(('/confirmation'), async(req,res) =>{

})


module.exports = router;