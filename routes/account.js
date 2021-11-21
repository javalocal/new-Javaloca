const e = require('express');
const express = require('express');
const User = require('../models/user')
const router = express.Router();




router.get('/signin', async (req, res) => {
    res.render('pages/signin',{jenis:"login"});
})

router.get('/signin_/:jenis', async (req, res) => {
    const jenis_=req.params.jenis;
    res.render('pages/signin',{jenis:jenis_});
})

router.get('/signup', async (req, res) => {
    res.render('pages/account', {jenis:"register"});
})

router.get('/signup_/:jenis', async (req, res) => {
    const tipe=req.params.jenis;
    res.render('pages/account', {jenis:tipe});
})
router.get('/logout', async (req, res) => {
    req.session.isLoggedIn = false;
    res.redirect('/');
})

router.post('/login', async (req,res) => {
    const email_ = req.body.email;
    const password_ = req.body.password;
    var emailok;
    var passwordok;
    var id;
    const data = await User.find({email:email_});
    await data.forEach((account)=>{
        emailok=account.email;
        passwordok=account.password;
        id=account._id;
    });
    if(email_==emailok){
        if(password_==passwordok){
            req.session.isLoggedIn = true;
            req.session.idAccount =id; 
            console.log(id);
            res.redirect('/');  
        }else{
            res.render('pages/signin', {jenis:"login",error: 'Wrong Password'});
        }
    }else{
        res.render('pages/signin', {jenis:"login",error: 'Wrong Password or Email'});
    }
})


router.post('/register', async (req,res) => {
    const name = req.body.name;
    const address = req.body.address;
    const email = req.body.email;
    var email_;
    var id;
    const password = req.body.password;
    const password_ = req.body.confirm;
    
    const data = await User.find({email:email});
    await data.forEach((account) => {
        email_=account.email;
    })
    if(email==email_){
        res.render('pages/account', {jenis:"register",error: 'Email sudah terdaftar'});
    }else{
        if (password != password_) {
            res.render('pages/account', {jenis:"register", error: 'Password tidak sama!'})
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
            const ss=await User.find({email:email})
            await ss.forEach((ss)=>{
                req.session.idAccount=ss._id;
            })
            req.session.isLoggedIn = true;
            
            res.redirect('/');
        }
    }
    
})

router.post('/userupdate', async(req,res) => {
    
    })


module.exports = router;