const express = require('express');
const router = express.Router();




router.get('/', (req , res) => {
    res.render('pages/account')
})

router.get('/logout', (req, res) => {
    req.session.isLoggedIn = false;
    res.redirect('/');
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

module.exports = router;