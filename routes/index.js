
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('pages/index')
})

router.get('/FAQ', (req, res) => {
    res.render('pages/Faq')
})

router.get('/Howtobook', (req, res) => {
    res.render('pages/Howtobook')
})

router.get('/Aboutus', (req, res) => {
    res.render('pages/Aboutus')
})

router.get('/Contacus', (req, res) => {
    res.render('pages/Contacus')
})

router.get('/Terms', (req, res) => {
    res.render('pages/Terms')
})

router.get('/partner', (req, res) => {
    res.render('pages/partner')
})

module.exports = router;