const e = require('express')
const express = require('express')
const router = express.Router()
const transport = require('../models/transport')

router.get('/airplane', (req, res) => {
    res.render('pages/plane')
})

router.get('/train', (req, res) => {
    res.render('pages/train')
})

router.post('/plane-results', async(req,res) => {
const From =req.body.fromplane;
const To =req.body.toplane;
if(From == To){
    res.render('pages/plane', {error: 'Tujuan tidak valid'})
}else{
const date =req.body.dateplane;
    if (date == null || date=='') {
        res.render('pages/plane', {error: 'Tanggal tidak valid'})
    }
    const classplane=req.body.classplane;
    var search = {to: To, from: From};
    var data = await transport.find(search);
    res.render('pages/plane_hasil', {transport: data});
   
}

})
module.exports = router;