const booking = require('../models/voucher-acomo');
const transport=require('../models/voucher-trans');
const User = require('../models/user')
const express = require('express')
const router = express.Router()
router.get(('/'), async(req, res) => {
    const id=req.session.idAccount;
    var email;
const data_= await User.find({_id:id});
console.log(data_);
await data_.forEach((account)=>{
       email=account.email;
   })
   console.log(data_)
   const data=await booking.find({email:email})
   const data1=await transport.find({email:email})
    res.render('pages/mybooking',{data:data,data_:data1});
})

router.get(('/voucher-accomodation/:id'), async(req, res) => {
    const id=req.params.id;
   const data=await booking.find({_id:id})
   console.log(data);
   res.render('pages/voucher-accomodation',{data:data, type:"oldvoucher"});
})
router.get(('/voucher-transport/:id'), async(req, res) => {
    const id=req.params.id;
   const data=await transport.find({_id:id})
   console.log(data);
   res.render('pages/voucher-transport',{data:data, type:"oldvoucher"});
})



module.exports = router;