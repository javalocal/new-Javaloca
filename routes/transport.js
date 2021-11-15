const e = require('express')
const express = require('express')
const router = express.Router()
const transport = require('../models/transport')

router.get('/plane', (req, res) => {
    res.render('pages/plane')
})

router.get('/train', (req, res) => {
    res.render('pages/train')
})

router.get('/seat', (req, res) => {
    res.render('pages/bangku_p')
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

router.post('/train-results', async(req,res) => {
    const From =req.body.fromtrain;
    const To =req.body.totrain;
    if(From == To){
        res.render('pages/train', {error: 'Tujuan tidak valid'})
    }else{
    const date =req.body.datetrain;
        if (date == null || date=='') {
            res.render('pages/train', {error: 'Tanggal tidak valid'})
        }
        const classplane=req.body.classtrain;
        var search = {to: To, from: From, traincode: "ka"};
        var data = await transport.find(search);
        res.render('pages/train_hasil', {transport: data});
       
    }
    
    })
module.exports = router;