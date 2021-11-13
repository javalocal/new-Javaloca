
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('pages/index')
})

router.get('/FAQ', (req, res) => {
    res.render('pages/Faq')
})

router.get('/mybook', (req, res) => {
    res.render('pages/mybooking')
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

module.exports = router;