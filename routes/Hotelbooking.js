const express = require('express')
const router = express.Router()
const akomodasi = require('../models/akomodasi')
const kamar = require('../models/kamar');
const conf = require('../models/conhotel');
const booking = require('../models/voucher-acomo');
const User = require('../models/user')
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
if (date == null || date=='') {
    res.render('pages/Hotelbooking', {error: 'Tanggal tidak valid'})
}
const user=User.find({_id:req.session.idAccount});
console.log(req.session.idAccount);
var date_=new Date(date);
const cekout=date_.addDays(parseInt(malam));
book.bookinginfo((parseInt(malam)),(datestring(date_)),(datestring(cekout)));

var data = await akomodasi.find({lok:location, jenis:"Hotel"});
var kmr = await kamar.find();
    res.render('pages/Hotel_hasil', {akomodasi: data, kamar:kmr});

})

router.post(('/villa-results'), async(req,res) => {
    const location =req.body.location;
    var malam = req.body.malam;
    const date = req.body.checkin;
    if (date == null || date=='') {
        res.render('pages/villa', {error: 'Tanggal tidak valid'})
    }
    var date_=new Date(date);
    const cekout=date_.addDays(parseInt(malam));
    book.bookinginfo((parseInt(malam)),(datestring(date_)),(datestring(cekout)));
    console.log(book.checkin);
    const search = {lok:location,jenis:"Villa"}
    var data = await akomodasi.find(search);
        res.render('pages/Villa_hasil', {akomodasi: data});
    
    })

router.get(('/confirmation-hotel/:id'), async(req,res) =>{
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



router.get(('/confirmation-villa/:id'), async(req,res) =>{
    const akomodasiid= req.params.id;
    var kode;
    const hotel =await akomodasi.find({_id:akomodasiid});
    await hotel.forEach((akomodasi)=>{
       book.villa(akomodasi.name,akomodasi.lokasi,akomodasi.jenis,akomodasi.harga);
    })
    var jumlah = (parseInt(book.lama)*parseInt(book.harga));
    var data_book = book.createArray();
    console.log(jumlah);
    res.render('pages/Hotel_resoult1',{data:book.createArray(), jum:jumlah});
    })


router.get(('/payment'), async(req,res) =>{
    const jenis = "Hotel";
    if(req.session.isLoggedIn){
        res.render('pages/payment',{jenis:jenis}); 
    }else{
        res.render('pages/signin',{jenis:jenis});
    }
       
})

router.post(('/voucher-payment'), async(req,res) =>{
    const cardnum=req.body.cardnumber;
    const exp=req.body.exp;
    const cvc=req.body.cvc;
    const name=req.body.name;
    const id=req.session.idAccount;
    var nam;
    var email;
    var lokasi;
    var date_ =new Date();
    const data_=await User.find({_id:id});
    console.log(data_);
    await data_.forEach((account)=>{
        nam=account.name;
        email=account.email;
        lokasi=account.address;
    })
   if(cardnum != null || cardnum !=""){
    if(exp != null || exp !=""){
        if(cvc!=null || cvc!=""){
            if(name!=null|| name!=""){
                
                const data = book.createArray();
                console.log(data);
                const data_baru= new booking ({
                    jenis:data.jenis,
                    akomodasi:data.hotel,
                    email:email,
                    name:nam,
                    alamat_akomo:data.lokasi,
                    alamat_account:lokasi,
                    checkin:data.cekin,
                    checkout:data.cekout,
                    lama:data.lama,
                    tanggal:(datestring(date_)),
                    kamar:data.kamar
                })
                console.log(data_baru);
                await data_baru.save((err, res) => {
                    if (err) console.error(err);
                    else {
                        console.log("berhasil");
                    }
                });
                res.render('pages/voucher-accomodation',{data:data_baru, type:"newvoucher"});
            }else{
                res.render('pages/payment', {jenis:"Hotel",error: 'Warning Name null'});
            }
        }else{
            res.render('pages/payment', {jenis:"Hotel",error: 'Warning CVC null'});
        }
    }else{
        res.render('pages/payment', {jenis:"Hotel",error: 'Warning Exp Card null'});
    }
   }else{
    res.render('pages/payment', {jenis:"Hotel",error: 'Warning Card Number null'});
   }
       
})

router.post('/signin/:jenis', async (req,res) => {
    const jenis = req.params.jenis;
    const email_ = req.body.email;
    const password_ = req.body.password;
    var emailok;
    var passwordok;
    var id;
    data = await User.find({email:email_});
    await data.forEach((account)=>{
        emailok=account.email;
        passwordok=account.password;
        id=account._id;
    });
    if(email_==emailok){
        if(password_==passwordok){
            req.session.isLoggedIn = true;
            req.session.idAccount =id; 
            res.render('pages/payment',{jenis:jenis});  
        }else{
            res.render('pages/signin', {jenis:jenis,error: 'Wrong Password'});
        }
    }else{
        res.render('pages/signin', {jenis:jenis,error: 'Wrong Password or Email'});
    }
})

router.post('/register/:jenis', async (req,res) => {
    const jenis_=req.params.jenis;
    const name = req.body.name;
    const address = req.body.address;
    const email = req.body.email;
    var email_;
    const password = req.body.password;
    const password_ = req.body.confirm;
    
    data = await User.find({email:email});
    await data.forEach((account) => {
        email_=account.email;
    })
    if(email==email_){
        res.render('pages/account', {jenis:jenis_ ,error: 'Email sudah terdaftar'});
    }else{
        if (password != password_) {
            res.render('pages/account', {jenis:jenis_, error: 'Password tidak sama!'})
        }
        else {
            const user = new User ({
                name: name,
                email: email,
                address: address,
                password: password
            });
            await user.save((err, res) => {
                if (err) console.error(err);
                else {
                    console.log('Sign In berhasil!');
                    
                }
            })
            res.render('pages/signin',{jenis:jenis_}); 
        }
    }
    
})



module.exports = router;