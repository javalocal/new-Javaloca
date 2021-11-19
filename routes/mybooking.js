const booking = require('../models/voucher-acomo');
const User = require('../models/user')
const express = require('express')

const router = express.Router()
router.get(('/'), async(req, res) => {
    const id=req.session.idAccount;
    var email;
    const data_= await User.find({id:id});
   await data.forEach((account)=>{
       email=account.email;
   })
   const data=await booking.find({email:email})
   console.log(data);
    res.render('pages/mybooking',{data:data});
})

router.get(('/voucher-accomodation/:id'), async(req, res) => {
    const id=req.params.id;
   const data=await booking.find({_id:id})
   console.log(data);
   res.render('pages/voucher-accomodation',{data:data, type:"oldvoucher"});
})



module.exports = router;