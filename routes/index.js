
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

module.exports = router;