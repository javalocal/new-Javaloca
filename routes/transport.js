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
const from =req.body.fromplane;
const to =req.body.toplane;
if(from == to){
    res.render('pages/plane', {error: 'Tujuan tidak valid'})
}else{
const date =req.body.dateplane;
    if (date == null || date=='') {
        res.render('pages/plane', {error: 'Tanggal tidak valid'})
    }
    const classplane=req.body.classplane;
    var data = await transport.find();
    await data.forEach((transport) =>{
        if (from == transport.from) {
            if (to == transport.to) {
                if (date == transport.date){
                    if (classplane== transport.classtype) {
                        res.render('pages/plane_hasil', {transports: data})   
                    }
                }
                
            }
        }
    })
}

})
module.exports = router;