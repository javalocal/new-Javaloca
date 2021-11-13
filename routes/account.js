const e = require('express');
const express = require('express');
const User = require('../models/user')
const router = express.Router();
var  emaiL;



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
    const email = req.body.email_signin;
    emaiL = req.body.email_signin;
    const password = req.body.password_signin;
    console.log(emaiL);

    data = await User.find();

    await data.forEach((account) => {
        if (email == account.email) {
            if (password == account.password) {
                req.session.isLoggedIn = true;
                res.redirect('/');
                
                
            }
            else {
                res.render('pages/signin', {error: 'Wrong Password!'})
            }
        }
    })
})


router.post('/register', async (req,res) => {
    const name = req.body.name;
    const address = req.body.address;
    const email = req.body.email;
    
    data = await User.find();
    await data.forEach((account) => {
        if (email == account.email) {
            res.render('pages/account', {error: 'Email sudah terdaftar'})
        }
    })
    const password = req.body.password;
    const password_ = req.body.confirm;
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
            }
        })
        req.session.isLoggedIn = true;
        res.redirect('/');
    }
})

router.post('/userupdate', async(req,res) => {
    
    })


module.exports = router;