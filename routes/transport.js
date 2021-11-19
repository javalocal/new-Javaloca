const e = require('express')
const express = require('express')
const router = express.Router()
const transport = require('../models/transport')
var confirmation=require('./model')

router.get('/plane', (req, res) => {
    res.render('pages/plane')
})

router.get('/train', (req, res) => {
    res.render('pages/train')
})

router.get('/seat', (req, res) => {
    res.render('pages/bangku_p')
})

function datestring(today){
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    return today = dd + '-' + mm + '-' + yyyy;
}




router.post('/plane-results', async(req,res) => {
const From =req.body.fromplane;
const To =req.body.toplane;
if(From == To){
    res.render('pages/plane', {error: 'Tujuan tidak valid'})
}else{
const date =req.body.dateplane;

const date_=datestring(date);

    if (date == null || date=='') {
        res.render('pages/plane', {error: 'Tanggal tidak valid'})
    }
    const classplane=req.body.classplane;
    var search = {to: To, from: From, bagasi: "20KG"};
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
        if (classplane == "Any" ){
            var search = {to: To, from: From, traincode: "ka"};
        }else{
            var search = {to: To, from: From, clas: classplane , traincode: "ka"};
        }
        
        var data = await transport.find(search);
        res.render('pages/train_hasil', {transport: data});
       
    }
    
    })

    router.get('/confirmation/:id', (req, res) => {
        const id = req.params.id;
        const data = await transport.find({_id:id});
        await data.forEach((transport)=>{
            
        })
    })

module.exports = router;