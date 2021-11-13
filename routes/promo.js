   
const express = require('express')

const router = express.Router()
router.get(('/'), (req, res) => {
    res.render('pages/promo')
})

router.get(('/promo1'), (req, res) => {
    res.render('pages/promo1')
})

router.get(('/promo2'), (req, res) => {
    res.render('pages/promo2')
})

router.get(('/promo3'), (req, res) => {
    res.render('pages/promo3')
})



module.exports = router;