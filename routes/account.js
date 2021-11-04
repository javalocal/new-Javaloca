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

router.post('/login', async (req,res) => {
    const email = req.body.email_signin;
    const password = req.body.password_signin;

    data = await User.find();

    await data.forEach((account) => {
        if (email == account.email) {
            if (password == account.password) {
                req.session.isLoggedIn = true;
                res.redirect('/');
                console.log('Sign In berhasil!');
                
            }
            else {
                res.render('pages/signin', {error: 'Wrong Password!'})
            }
        }
    })
})


router.post('/register', async (req,res) =>{
    const name = req.body.name;
    const address = req.body.address;
    const email =req.body.email;
    
    data = await User.find();
    await data.forEach((account) => {
        if (email == account.email) {
            res.render('pages/account', {error: 'Email sudah terdaftar'})
        }
    })

    const password = req.body.password;
    const comfirm = req.body.confirm;

 if (password != comfirm) {
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
        res.redirect('/account/signin');
    }
})

module.exports = router;