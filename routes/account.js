const e = require('express');
const express = require('express');
const User = require('../models/user')
const router = express.Router();




router.get('/signin', async (req, res) => {
    res.render('pages/signin');
})

router.get('/signup', async (req, res) => {
    res.render('pages/account');
})

router.get('/logout', async (req, res) => {
    req.session.isLoggedIn = false;
    res.redirect('/');
})

router.get('/user', async (req, res) => {
    search ={email:emaiL};
    var data = await User.find(search);
    console.log(data.name);
    res.render('pages/user', {datauser:data});
})

router.post('/login', async (req,res) => {
    const email_ = req.body.email;
    const password_ = req.body.password;
    var emailok;
    var passwordok;

    data = await User.find({email:email_});
    await data.forEach((account)=>{
        emailok=account.email;
        passwordok=account.password;
    });
    if(email_==emailok){
        if(password_==passwordok){
            req.session.isLoggedIn = true;
            res.redirect('/');  
        }else{
            res.render('pages/signin', {error: 'Wrong Password'});
        }
    }else{
        res.render('pages/signin', {error: 'Wrong Password or Email'});
    }
})


router.post('/register', async (req,res) => {
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
        res.render('pages/account', {error: 'Email sudah terdaftar'});
    }else{
        if (password != password_) {
            res.render('pages/account', {error: 'Password tidak sama!'})
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
                    req.session.login = user.id;
                }
            })
            req.session.isLoggedIn = true;
            res.redirect('/');
        }
    }
    
})

router.post('/userupdate', async(req,res) => {
    
    })


module.exports = router;