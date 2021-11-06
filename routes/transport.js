const express = require('express')
const router = express.Router()

router.get('/airplane', (req, res) => {
    res.render('pages/plane')
})

router.get('/train', (req, res) => {
    res.render('pages/train')
})
module.exports = router;