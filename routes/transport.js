const e = require('express')
const express = require('express')
const router = express.Router()
const transport = require('../models/transport')
const confirmation=require('../models/transport_con')
const User = require('../models/user')
const booking=require('../models/voucher-trans');

var trans= new confirmation()

router.get('/plane', (req, res) => {
    res.render('pages/Plane')
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
    res.render('pages/Plane', {error: 'Tujuan tidak valid'})
}else{
const date =req.body.dateplane;

const date_=new Date(date);
trans.gettanggal(datestring(date_));
    if (date == null || date=='') {
        res.render('pages/Plane', {error: 'Tanggal tidak valid'})
    }
    const classplane=req.body.classplane;
    var search = {to: To, from: From, bagasi: "20KG"};
    var data = await transport.find(search);
    res.render('pages/Plane_hasil', {transport: data});
   
}




})

router.post('/train-results', async(req,res) => {
    const From =req.body.fromtrain;
    const To =req.body.totrain;
    if(From == To){
        res.render('pages/train', {error: 'Tujuan tidak valid'})
    }else{
    const date =req.body.datetrain;
    const date_=new Date(date);
    trans.gettanggal(datestring(date_));
        if (date == null || date=='') {
            res.render('pages/train', {error: 'Tanggal tidak valid'})
        }
        const classplane=req.body.classtrain;
        if (classplane == "Any" ){
            var search = {to: To, from: From, pesawat: "ka"};
        }else{
            var search = {to: To, from: From, clas: classplane , pesawat: "ka"};
        }
        
        var data = await transport.find(search);
        res.render('pages/train_hasil', {transport: data});
       
    }
    
    })

    router.get('/confirmation/:id',async (req, res) => {
        const id = req.params.id;
        const data = await transport.find({_id:id});
        await data.forEach((transport)=>{
            if(transport.pesawat=='ka'){
                trans.gettransport(transport.name,transport.clas,transport.ter_to,transport.ter_from,'10',transport.price,'Kereta',transport.kode,transport.pesawat,transport.waktu_from,transport.waktu_to);    
            }else{
                trans.gettransport(transport.name,transport.clas,transport.ter_to,transport.ter_from,transport.bagasi,transport.price,'Pesawat',transport.kode,transport.pesawat,transport.waktu_from,transport.waktu_to);    
            }
        })
        console.log(trans.transportArray());
        res.render('pages/confirmation_trans', {data:trans.transportArray()});
    })

    

   

  
module.exports = router;