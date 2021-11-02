const express = require('express');
const User = require('../models/user')
const router = express.Router();




router.get('/signin', async (req, res) => {
    res.render('pages/signin');
})

router.get('/signup', async (req, res) => {
    res.render('pages/account');
})

router.post('/', (req, res) => {
    const email = req.body.emailsignin;
    const password = req.body.passwordsignin;

    if (email == "123@134" && password == "123") {
        req.session.isLoggedIn = true;
        res.redirect('/');
    }
    else {
        res.redirect('/');
    }
    console.log(session.isLoggedIn);
})

router.post('/register', async (req,res) =>{
    const name = req.body.name_signup;
    const address = req.body.address_signup;
    const email =req.body.email_signup;
    
    data = await User.find();
    await data.forEach((account) => {
        if (email == account.email) {
            res.render('pages/signup', {error: 'Email sudah terdaftar'})
        }
    })

    const password = req.body.password_signup;
    const user = new User ({
        name: name,
        email: email,
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
})

module.exports = router;